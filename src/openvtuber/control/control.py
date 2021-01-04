def set_blink(eye_aspect_ratio):
    #average human eye aspect ratio is assumed to be 0.25
    return (eye_aspect_ratio / 0.25)

def set_gaze_left(left_iris, right_iris):
    #assuming iris coordinates are given with respect to the upper left corner of the eye
    return (max(left_iris[2], right_iris[2]))

def set_gaze_up(left_iris, right_iris):
    #assuming iris coordinates are given with respect to the upper left corner of the eye
    return (max(left_iris[3], right_iris[3]))

def set_head_rotation_X(yaw):
    return(yaw)

def set_head_rotation_Y(roll):
    return(roll)

#pretty sure jaw rotation has nothing to do with how open a mouth is, but whatever
#fix later ig
def set_jaw_rotation_Y(mouth_aspect_ratio, mouth_distance):
    mouth_height = mouth_distance*mouth_aspect_ratio
    return mouth_height


def ml_to_vrm_state(*args):
    roll, pitch, yaw, eye_aspect_ratio_left, eye_aspect_ratio_right, mouth_aspect_ratio, mouth_distance, \
        left_iris, right_iris = args[0]
    #x_l, y_l, ll, lu = left_iris
    #x_r, y_r, rl, ru = right_iris
    blinkLeftValue = 0
    blinkRightValue = 0
    headRotationX = 0
    headRotationY = 0
    jawRotationX = 0
    jawRotationY = 0
    lookAtX = 0
    lookAtY = 0
    lookAtZ = 0
    neckRotationX = 0
    neckRotationY = 0

    blinkLeftValue = set_blink(eye_aspect_ratio_left)
    blinkRightValue = set_blink(eye_aspect_ratio_right)
    lookAtX = set_gaze_left(left_iris, right_iris)
    LookAtY = set_gaze_up(left_iris, right_iris)
    headRotationX = set_head_rotation_X(yaw)
    headRotationY = set_head_rotation_Y(roll)
    jawRotationY = set_jaw_rotation_Y(mouth_distance, mouth_aspect_ratio)


    return (blinkLeftValue, blinkRightValue, headRotationX, headRotationY, jawRotationX,
            jawRotationY, lookAtX, lookAtY, lookAtZ, neckRotationX, neckRotationY)