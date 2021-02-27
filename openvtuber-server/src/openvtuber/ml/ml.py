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
    def __init__(self, noExtrapolation=True):
        self.evenFrame = True
        self.no_face_count = 0

        self.posenet = PoseNet()
        self.face_infer = FaceInference(noExtrapolation)

        # store 5 vals, newest at end
        self.prev_boxes = deque(maxlen=5)
        self.noExtrap = noExtrapolation
        pass

    def infer_image(self, image):
        self.evenFrame = not self.evenFrame
        image = flip(image, 1)
        facebox = self.face_infer.get_facebox(image, self.evenFrame, self.prev_boxes)

        if facebox is not None:
            self.prev_boxes.append(facebox)
            (roll, pitch, yaw, ear_left, ear_right, mar, mdst, left_iris, right_iris) \
                = self.face_infer.infer(image, facebox)
            posenet_keypoints, posenet_score = self.posenet.estimate_single_pose(image)

            out = (roll, pitch, yaw, ear_left, ear_right, mar, mdst,
                   left_iris, right_iris, posenet_keypoints, posenet_score)

            return out
        else:
            return None
