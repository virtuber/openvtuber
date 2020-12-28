import cv2


def infer(image):
    """
    default infer place holder, output black white video stream
    """
    return cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
