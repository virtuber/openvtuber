import cv2
import dlib
import numpy as np
from openvtuber import utils
from .pose_estimator import PoseEstimator
# from .mlUtils import extrapolate
from collections import deque


def infer(image):
    """
    default infer place holder, output video stream
    """
    return cv2.flip(image, 1)


class Inference:
    def __init__(self, noExtrapolation=True):
        self.camera_angle = 0
        self.face_detector = dlib.get_frontal_face_detector()
        self.root = utils.get_project_root()
        self.evenFrame = True

        path = "openvtuber/assets/shape_predictor_68_face_landmarks.dat"
        self.dlib_model_path = str(self.root.joinpath(path))
        self.shape_predictor = dlib.shape_predictor(self.dlib_model_path)

        self.no_face_count = 0

        # store 5 vals, newest at end
        self.prev_boxes = deque(maxlen=5)
        self.noExtrap = noExtrapolation
        pass

    def get_face(self, detector, image):
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

    def shape_to_np(self, shape):
        coords = np.zeros((68, 2))
        for i in range(68):
            coords[i] = (shape.part(i).x, shape.part(i).y)
        return coords

    def detect_iris(self, frame, marks, side="left"):
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

        if eye.size == 0:
            return 0, 0, 0.5, 0.5

        eye = cv2.cvtColor(eye, cv2.COLOR_RGB2GRAY)
        eye_binarized = cv2.threshold(eye, np.quantile(eye, 0.2), 255, cv2.THRESH_BINARY)[1]
        contours, _ = cv2.findContours(eye_binarized, cv2.RETR_TREE, cv2.CHAIN_APPROX_NONE)

        if len(contours) < 2:
            return 0, 0, 0.5, 0.5

        contours = sorted(contours, key=cv2.contourArea)
        moments = cv2.moments(contours[-2])

        if moments['m00'] == 0:
            return 0, 0, 0.5, 0.5

        x = int(moments['m10'] / moments['m00']) + min_x
        y = int(moments['m01'] / moments['m00']) + min_y
        l_ratio = (x - min_x - margin) / (max_x - min_x - 2 * margin)
        r_ratio = (y - min_y - margin) / (max_y - min_y - 2 * margin)

        return x, y, l_ratio, r_ratio
        # except:
        #    return 0, 0, 0.5, 0.5

    def eye_aspect_ratio(self, eye):
        """
        eye: array of shape 6x2
        """
        ear = np.linalg.norm(eye[1] - eye[5]) + np.linalg.norm(eye[2] - eye[4])
        ear /= (2 * np.linalg.norm(eye[0] - eye[3]) + 1e-6)
        return ear

    def mouth_aspect_ration(self, mouth):
        mar = np.linalg.norm(mouth[1] - mouth[7]) + \
            np.linalg.norm(mouth[2] - mouth[6]) + \
            np.linalg.norm(mouth[3] - mouth[5])
        mar /= (2*np.linalg.norm(mouth[0] - mouth[4]) + 1e-6)
        return mar

    def mouth_distance(self, mouth):
        return np.linalg.norm(mouth[0] - mouth[4])

    def infer_image(self, image):
        self.evenFrame = not self.evenFrame

        pose_estimator = PoseEstimator(self.root, img_size=image.shape[:2])
        image = cv2.flip(image, 1)

        if not self.evenFrame or self.noExtrap:  # face dtect on odd frame
            facebox = self.get_face(self.face_detector, image)
            if facebox is not None:
                self.no_face_count = 0
        elif len(self.prev_boxes) > 1:  # linear extrapolate
            if self.no_face_count > 1:
                facebox = None
            else:
                facebox = self.prev_boxes[-1] + \
                    np.mean(np.diff(np.array(self.prev_boxes), axis=0), axis=0)[0]
                facebox = facebox.astype(int)
                self.no_face_count += 1
        else:
            facebox = None

        if facebox is not None:
            self.prev_boxes.append(facebox)

            face = dlib.rectangle(left=facebox[0], top=facebox[1],
                                  right=facebox[2], bottom=facebox[3])
            marks = self.shape_to_np(self.shape_predictor(image, face))

            x_l, y_l, ll, lu = self.detect_iris(image, marks, "left")
            x_r, y_r, rl, ru = self.detect_iris(image, marks, "right")

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
            pitch = np.clip(-(np.degrees(pose[1])) - self.camera_angle, -40, 40)
            yaw = np.clip(-(np.degrees(pose[0])), -50, 50)

            # returns min of left and right eye, so currently cannot wink
            # min_ear = min(eye_aspect_ratio(marks[36:42]), eye_aspect_ratio(marks[42:48]))

            # code has been fixed, ear has been split into left and right
            ear_left = self.eye_aspect_ratio(marks[36:42])
            ear_right = self.eye_aspect_ratio(marks[42:48])

            mar = self.mouth_aspect_ration(marks[60:68])
            mdst = self.mouth_distance(marks[60:68])/(facebox[2] - facebox[0])

            left_iris = [x_l, y_l, ll, lu]
            right_iris = [y_r, y_r, rl, ru]

            out = (roll[0], pitch[0], yaw[0], ear_left, ear_right, mar, mdst, left_iris, right_iris)

            return out
        else:
            return None
