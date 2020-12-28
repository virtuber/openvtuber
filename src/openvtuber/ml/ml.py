import cv2
import dlib
import numpy as np
from openvtuber import utils


def infer(image):
    """
    default infer place holder, output black white video stream
    """
    return cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)


class PoseEstimator:
    def __init__(self, prj_root, img_size=(480, 640)):
        self.size = img_size
        self.p_root = prj_root

        # 3d model points
        self.model_points = np.array([
            (0.0, 0.0, 0.0),             # Nose tip
            (0.0, -330.0, -65.0),        # Chin
            (-225.0, 170.0, -135.0),     # Left eye left corner
            (225.0, 170.0, -135.0),      # Right eye right corner
            (-150.0, -150.0, -125.0),    # Mouth left corner
            (150.0, -150.0, -125.0)      # Mouth right corner
        ]) / 4.5

        self.model_points_68 = self._get_full_model_points()

        # Camera internals
        self.focal_length = self.size[1]
        self.camera_center = (self.size[1] / 2, self.size[0] / 2)
        self.camera_matrix = np.array(
            [[self.focal_length, 0, self.camera_center[0]],
             [0, self.focal_length, self.camera_center[1]],
             [0, 0, 1]], dtype="double")

        self.dist_coefs = np.zeros((4, 1))

        self.r_vec = np.array([[0.01891013], [0.08560084], [-3.14392813]])
        self.t_vec = np.array(
            [[-14.97821226], [-10.62040383], [-2053.03596872]])

    def _get_full_model_points(self, filename='openvtuber/assets/model.txt'):
        """Get all 68 3D model points from file"""
        raw_value = []
        filename = str(self.p_root.joinpath("openvtuber/assets/model.txt"))
        with open(filename) as file:
            for line in file:
                raw_value.append(line)
        model_points = np.array(raw_value, dtype=np.float32)
        model_points = np.reshape(model_points, (3, -1)).T

        # Transform the model into a front view.
        model_points[:, 2] *= -1

        return model_points

    def solve_pose_by_68_points(self, image_points):
        """
        Solve pose from all the 68 image points
        Return (rotation_vector, translation_vector) as pose.
        """

        if self.r_vec is None:
            (_, rotation_vector, translation_vector) = cv2.solvePnP(
                self.model_points_68, image_points, self.camera_matrix, self.dist_coefs)
            self.r_vec = rotation_vector
            self.t_vec = translation_vector

        (_, rotation_vector, translation_vector) = cv2.solvePnP(
            self.model_points_68,
            image_points,
            self.camera_matrix,
            self.dist_coefs,
            rvec=self.r_vec,
            tvec=self.t_vec,
            useExtrinsicGuess=True)

        R, _ = cv2.Rodrigues(rotation_vector)
        points_3d = R.dot(self.model_points_68.T) + translation_vector  # 3x68
        reproject_image_points = self.camera_matrix.dot(points_3d).T  # 68x2
        reproject_image_points /= reproject_image_points[:, 2:3]
        reproject_image_points = reproject_image_points[:, :2]
        reprojection_error = np.mean((image_points - reproject_image_points)**2)

        return reprojection_error, rotation_vector, translation_vector


def get_face(detector, image):
    image = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)

    detect_out = detector(image)
    if len(detect_out) == 0:
        return None

    box = detect_out[0]
    x1 = box.left()
    y1 = box.top()
    x2 = box.right()
    y2 = box.bottom()
    return [x1, y1, x2, y2]


def shape_to_np(shape):
    coords = np.zeros((68, 2))
    for i in range(68):
        coords[i] = (shape.part(i).x, shape.part(i).y)
    return coords


def detect_iris(frame, marks, side="left"):
    """
    return:
        x: the x coordinate of the iris
        y: the y coordinate of the iris
        x_amount: how much the iris is towards the left.
            0 means totally left (min_x), 1 is totally right (max_x)
        y_amouny: how much the iris is towards the top.
            0 means totally top (min_y), 1 is totally right (min_y)
    """
    mask = np.full(frame.shape[:2], 255, np.uint8)
    if side == "left":
        region = marks[36:42].astype(np.int32)
    elif side == "right":
        region = marks[42:48].astype(np.int32)
    # try:
    cv2.fillPoly(mask, [region], (0, 0, 0))
    eye = cv2.bitwise_not(frame, frame.copy(), mask=mask)
    # Cropping on the eye
    margin = 4
    min_x = np.min(region[:, 0]) - margin
    max_x = np.max(region[:, 0]) + margin
    min_y = np.min(region[:, 1]) - margin
    max_y = np.max(region[:, 1]) + margin

    eye = eye[min_y:max_y, min_x:max_x]
    eye = cv2.cvtColor(eye, cv2.COLOR_RGB2GRAY)

    eye_binarized = cv2.threshold(eye, np.quantile(eye, 0.2), 255, cv2.THRESH_BINARY)[1]
    contours, _ = cv2.findContours(eye_binarized, cv2.RETR_TREE, cv2.CHAIN_APPROX_NONE)
    contours = sorted(contours, key=cv2.contourArea)
    moments = cv2.moments(contours[-2])

    x = int(moments['m10'] / moments['m00']) + min_x
    y = int(moments['m01'] / moments['m00']) + min_y
    l_ratio = (x - min_x - margin) / (max_x - min_x - 2 * margin)
    r_ratio = (y - min_y - margin) / (max_y - min_y - 2 * margin)

    return x, y, l_ratio, r_ratio
    # except:
    #    return 0, 0, 0.5, 0.5


def eye_aspect_ratio(eye):
    """
    eye: array of shape 6x2
    """
    ear = np.linalg.norm(eye[1] - eye[5]) + np.linalg.norm(eye[2] - eye[4])
    ear /= (2 * np.linalg.norm(eye[0] - eye[3]) + 1e-6)
    return ear


def mouth_aspect_ration(mouth):
    mar = np.linalg.norm(mouth[1] - mouth[7]) + \
                         np.linalg.norm(mouth[2] - mouth[6]) + \
                         np.linalg.norm(mouth[3] - mouth[5])
    mar /= (2*np.linalg.norm(mouth[0] - mouth[4]) + 1e-6)
    return mar


def mouth_distance(mouth):
    return np.linalg.norm(mouth[0] - mouth[4])


def infer_image(image):
    camera_angle = 0

    root = utils.get_project_root()
    dlib_model_path = str(root.joinpath("openvtuber/assets/shape_predictor_68_face_landmarks.dat"))
    shape_predictor = dlib.shape_predictor(dlib_model_path)
    face_detector = dlib.get_frontal_face_detector()

    pose_estimator = PoseEstimator(root, img_size=image.shape[:2])

    # flip?
    image = cv2.flip(image, 1)

    facebox = get_face(face_detector, image)  # don't need args.cpu, assume it's already cpu
    # if facebox is not None:
    #   ???

    if facebox is not None:
        face = dlib.rectangle(left=facebox[0], top=facebox[1],
                              right=facebox[2], bottom=facebox[3])
        marks = shape_to_np(shape_predictor(image, face))

        x_l, y_l, ll, lu = detect_iris(image, marks, "left")
        x_r, y_r, rl, ru = detect_iris(image, marks, "right")

        error, R, T = pose_estimator.solve_pose_by_68_points(marks)
        pose = list(R) + list(T)

        pose += [(ll+rl)/2.0, (lu+ru)/2.0]

        """
        if error > 100:
            pose_estimator = PoseEstimator(img_size=sample_frame.shape[:2])

        else:
            steady_pose = []
            pose_np = np.array(pose).flatten()
            for value, ps_stb in  zip(pose_np, pose_stabilizers):
                ps_stb.update([value])
                steady_poes.append(ps_stb.state[0])
        """
        # everything is in degrees
        roll = np.clip(-(180+np.degrees(pose[2])), -50, 50)
        pitch = np.clip(-(np.degrees(pose[1])) - camera_angle, -40, 40)
        yaw = np.clip(-(np.degrees(pose[0])), -50, 50)
        min_ear = min(eye_aspect_ratio(marks[36:42]), eye_aspect_ratio(marks[42:48]))
        mar = mouth_aspect_ration(marks[60:68])
        mdst = mouth_distance(marks[60:68])/(facebox[2] - facebox[0])

        return roll, pitch, yaw, min_ear, mar, mdst, [x_l, y_l, ll, lu], [x_r, y_r, rl, ru]


if __name__ == "__main__":
    dlib_model_path = "assets/shape_predictor_68_face_landmarks.dat"
    shape_predictor = dlib.shape_predictor(dlib_model_path)
    face_detector = dlib.get_frontal_face_detector()
