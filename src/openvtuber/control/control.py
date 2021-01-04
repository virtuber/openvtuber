def ml_to_vrm_state(*args):
    roll, pitch, yaw, left_eye_aspect_ratio, right_eye_aspect_ratio, mouth_aspect_ratio, \
        mouth_distance, left_iris, right_iris = args[0]
    x_l, y_l, ll, lu = left_iris
    x_r, y_r, rl, ru = right_iris
    blinkLeftValue = 1
    blinkRightValue = 0
    headRotationX = 1
    headRotationY = 0
    jawRotationX = 0
    jawRotationY = 0
    lookAtX = 0
    lookAtY = 0
    lookAtZ = 0
    neckRotationX = 0
    neckRotationY = 0

    return (blinkLeftValue, blinkRightValue, headRotationX, headRotationY, jawRotationX,
            jawRotationY, lookAtX, lookAtY, lookAtZ, neckRotationX, neckRotationY)
