from cv2 import cvtColor, COLOR_BGR2GRAY
import dlib
import numpy as np
from .pose_estimator import PoseEstimator
from openvtuber import utils
from .face_utils import (shape_to_np, detect_iris,
                         eye_aspect_ratio, mouth_aspect_ratio, mouth_distance)


class FaceInference:
    def __init__(self, noExtrapolation):
        self.no_face_count = 0

        self.camera_angle = 0
        self.face_detector = dlib.get_frontal_face_detector()
        self.root = utils.get_project_root()

        path = "openvtuber/assets/shape_predictor_68_face_landmarks.dat"
        self.dlib_model_path = str(self.root.joinpath(path))
        self.shape_predictor = dlib.shape_predictor(self.dlib_model_path)

        self.noExtrap = noExtrapolation

    def get_face(self, detector, image):
        image = cvtColor(image, COLOR_BGR2GRAY)

        detect_out = detector(image)
        if len(detect_out) == 0:
            return None

        box = detect_out[0]
        x1 = box.left()
        y1 = box.top()
        x2 = box.right()
        y2 = box.bottom()
        return [x1, y1, x2, y2]

    def get_facebox(self, image, evenFrame, prev_boxes):
        if not evenFrame or self.noExtrap:  # face dtect on odd frame
            facebox = self.get_face(self.face_detector, image)
            if facebox is not None:
                self.no_face_count = 0
        elif len(prev_boxes) > 1:  # linear extrapolate
            if self.no_face_count > 1:
                facebox = None
            else:
                facebox = prev_boxes[-1] + \
                    np.mean(np.diff(np.array(prev_boxes), axis=0), axis=0)[0]
                facebox = facebox.astype(int)
                self.no_face_count += 1
        else:
            facebox = None

        return facebox

    def infer(self, image, facebox):
        if facebox is None:
            return None

        pose_estimator = PoseEstimator(self.root, img_size=image.shape[:2])
        face = dlib.rectangle(left=facebox[0], top=facebox[1],
                              right=facebox[2], bottom=facebox[3])
        marks = shape_to_np(self.shape_predictor(image, face))

        x_l, y_l, ll, lu = detect_iris(image, marks, "left")
        x_r, y_r, rl, ru = detect_iris(image, marks, "right")

        error, R, T = pose_estimator.solve_pose_by_68_points(marks)
        pose = list(R) + list(T)

        pose += [(ll+rl)/2.0, (lu+ru)/2.0]

        # everything is in degrees
        roll = np.clip(-(180+np.degrees(pose[2])), -50, 50)[0]
        pitch = np.clip(-(np.degrees(pose[1])) - self.camera_angle, -40, 40)[0]
        yaw = np.clip(-(np.degrees(pose[0])), -50, 50)[0]

        # code has been fixed, ear has been split into left and right
        ear_left = eye_aspect_ratio(marks[36:42])
        ear_right = eye_aspect_ratio(marks[42:48])

        mar = mouth_aspect_ratio(marks[60:68])
        mdst = mouth_distance(marks[60:68])/(facebox[2] - facebox[0])

        left_iris = [x_l, y_l, ll, lu]
        right_iris = [x_r, y_r, rl, ru]

        out = (roll, pitch, yaw, ear_left, ear_right, mar, mdst, left_iris, right_iris)

        return out
