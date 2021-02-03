import math


def set_blink(eye_aspect_ratio):
    # average human eye aspect ratio is assumed to be 0.25
    if eye_aspect_ratio < 0.19:
        eye_aspect_ratio = 0
    return (min(eye_aspect_ratio/0.35, 1))


def set_gaze_left(left_iris, right_iris):
    # assuming iris coordinates are given with respect to the upper left corner of the eye
    return (max(left_iris[2], right_iris[2]))


def set_gaze_up(left_iris, right_iris):
    # assuming iris coordinates are given with respect to the upper left corner of the eye
    return (max(left_iris[3], right_iris[3]))


def set_head_rotation(setting):
    return(setting)


# pretty sure jaw rotation has nothing to do with how open a mouth is, but whatever
# fix later ig
def set_jaw_rotation_Y(mouth_aspect_ratio, mouth_distance):
    mouth_height = mouth_distance*mouth_aspect_ratio
    return mouth_height


# have fun messing around with these values
# i created these using the debug and guess and check
def set_mouth_state(mar, mdst):
    """
    if mdst > 0.22:
        if mar > 0.425:
            return (1, 0, 0, 0, 0)
        elif mar > 0.2:
            return (0, 0, 0, 1, 0)
        elif mar > 0.1:
            return (0, 1, 0, 0, 0)
        else:
            return (0, 0, 0, 0, 0)
    else:
        if mar > 0.20:
            return (0, 0, 0, 0, 1)
        else:
            return (0, 0, 1, 0, 0)
    """

    out_mar = max_min_lim(mar/0.7, 0, 1)
    out_mdst = max_min_lim((mdst - 0.21)/0.35, 0, 1)

    return (out_mar, 0, 0, out_mdst, 0)


def max_min_lim(val, min_val, max_val):
    return max(min(val, max_val), min_val)


def ml_to_vrm_state(*args):
    roll, pitch, yaw, eye_aspect_ratio_left, eye_aspect_ratio_right, mouth_aspect_ratio, \
        mouth_distance, left_iris, right_iris = args[0]
    # x_l, y_l, ll, lu = left_iris
    # x_r, y_r, rl, ru = right_iris

    aValue, iValue, uValue, eValue, oValue = set_mouth_state(mouth_aspect_ratio, mouth_distance)

    angryValue = 0
    funValue = 0
    jawRotationX = 0
    jawRotationY = 0
    joyValue = 0
    neckRotationX = 0
    neckRotationY = 0
    neutralValue = 0
    sorrowValue = 0

    blinkLeftValue = 1 - set_blink(eye_aspect_ratio_left)
    blinkRightValue = 1 - set_blink(eye_aspect_ratio_right)

    if blinkLeftValue == 1 or blinkRightValue == 1:
        blinkLeftValue = 1
        blinkRightValue = 1
    else:
        blinkLeftValue = max(blinkLeftValue, blinkRightValue)
        blinkRightValue = blinkLeftValue

    lookAtX = set_gaze_left(left_iris, right_iris)
    lookAtY = set_gaze_up(left_iris, right_iris)
    lookAtZ = 0

    headRotationX = set_head_rotation(pitch*math.pi/180)
    headRotationY = set_head_rotation(-yaw*math.pi/180)
    headRotationZ = set_head_rotation(-roll*math.pi/180)
    # jawRotationY = set_jaw_rotation_Y(mouth_distance, mouth_aspect_ratio)

    upperChestX = 0
    upperChestY = 0
    upperChestZ = 0

    return (aValue, angryValue, blinkLeftValue, blinkRightValue, eValue, funValue, headRotationX,
            headRotationY, headRotationZ, iValue, jawRotationX, jawRotationY, joyValue, lookAtX,
            lookAtY, lookAtZ, neckRotationX, neckRotationY, neutralValue, oValue, sorrowValue,
            upperChestX, upperChestY, upperChestZ, uValue)
