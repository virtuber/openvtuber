import cv2


def infer(image):
    return cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
