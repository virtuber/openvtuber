from cv2 import flip
from .face import FaceInference
from .posenet import PoseNet
from collections import deque


def display(image):
    """
    default infer place holder, output video stream
    """
    return flip(image, 1)


class Inference:
    def __init__(self, enable_body, no_extrapolation=True):
        self.even_frame = True
        self.no_face_count = 0

        self.posenet = PoseNet()
        self.face_infer = FaceInference(no_extrapolation)

        # store 5 vals, newest at end
        self.prev_boxes = deque(maxlen=5)

        self.enable_body = enable_body
        self.no_extrap = no_extrapolation
        pass

    def infer_image(self, image):
        self.even_frame = not self.even_frame
        image = flip(image, 1)
        facebox = self.face_infer.get_facebox(image, self.even_frame, self.prev_boxes)

        if facebox is not None:
            self.prev_boxes.append(facebox)

            if self.enable_body:
                (roll, pitch, yaw, ear_left, ear_right, mar, mdst, left_iris, right_iris) \
                    = self.face_infer.infer(image, facebox)
                posenet_keypoints, posenet_score = self.posenet.estimate_single_pose(image)
                out = (roll, pitch, yaw, ear_left, ear_right, mar, mdst,
                       left_iris, right_iris, posenet_keypoints, posenet_score)
            else:
                out = self.face_infer.infer(image, facebox)

            return out
        else:
            return None
