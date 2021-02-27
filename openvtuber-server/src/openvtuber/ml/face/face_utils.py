import numpy as np
import cv2


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


def eye_aspect_ratio(eye):
    """
    eye: array of shape 6x2
    """
    ear = np.linalg.norm(eye[1] - eye[5]) + np.linalg.norm(eye[2] - eye[4])
    ear /= (2 * np.linalg.norm(eye[0] - eye[3]) + 1e-6)
    return ear


def mouth_aspect_ratio(mouth):
    mar = np.linalg.norm(mouth[1] - mouth[7]) + \
        np.linalg.norm(mouth[2] - mouth[6]) + \
        np.linalg.norm(mouth[3] - mouth[5])
    mar /= (2*np.linalg.norm(mouth[0] - mouth[4]) + 1e-6)
    return mar


def mouth_distance(mouth):
    return np.linalg.norm(mouth[0] - mouth[4])


def shape_to_np(shape):
    coords = np.zeros((68, 2))
    for i in range(68):
        coords[i] = (shape.part(i).x, shape.part(i).y)
    return coords
