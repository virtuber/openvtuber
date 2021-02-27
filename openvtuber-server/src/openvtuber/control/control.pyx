import math
from collections import deque


class Control:
    def __init__(self, enable_body: bool):
        self.left_shoulder_x_hist = deque(maxlen=5)
        self.right_shoulder_x_hist = deque(maxlen=5)

        self.enable_body = enable_body

    def set_blink(self, eye_aspect_ratio):
        # average human eye aspect ratio is assumed to be 0.25
        if eye_aspect_ratio < 0.19:
            eye_aspect_ratio = 0
        return (min(eye_aspect_ratio/0.35, 1))

    def set_gaze_left(self, left_iris, right_iris):
        # assuming iris coordinates are given with respect to the upper left corner of the eye
        return (max(left_iris[2], right_iris[2]))

    def set_gaze_up(self, left_iris, right_iris):
        # assuming iris coordinates are given with respect to the upper left corner of the eye
        return (max(left_iris[3], right_iris[3]))

    def set_head_rotation(self, setting):
        return(setting)

    # pretty sure jaw rotation has nothing to do with how open a mouth is, but whatever
    # fix later ig
    def set_jaw_rotation_Y(self, mouth_aspect_ratio, mouth_distance):
        mouth_height = mouth_distance*mouth_aspect_ratio
        return mouth_height

    # have fun messing around with these values
    # i created these using the debug and guess and check
    def set_mouth_state(self, mar, mdst):
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

        out_mar = self.max_min_lim(mar/0.7, 0, 1)
        out_mdst = self.max_min_lim((mdst - 0.21)/0.35, 0, 1)

        return (out_mar, 0, 0, out_mdst, 0)

    def max_min_lim(self, val, min_val, max_val):
        return max(min(val, max_val), min_val)

    def calc_shoulder_angle(self, pose_dict, head_angles, left_iris, right_iris):
        """
        output angle is in radians
        0 degrees is facing forward, pi/2 is facing either left or right

        currently utilises head and shouler ratio to calculate how much a head has
        turned. This is a constant that is set below, may need to be tweeked depending
        on the person.
        """
        actual_head_shoulder_ratio = 3.5

        if None in (pose_dict["leftShoulder"], pose_dict["rightShoulder"]):
            return (0, 0, 0)

        x_diff_shoulder = pose_dict["leftShoulder"][1] - pose_dict["rightShoulder"][1]
        y_diff_shoulder = pose_dict["leftShoulder"][0] - pose_dict["rightShoulder"][0]
        shoulder_dist = math.sqrt(x_diff_shoulder**2 + y_diff_shoulder**2)

        x_diff_eye = left_iris[0] - right_iris[0]
        y_diff_eye = left_iris[1] - right_iris[1]

        eye_dist = math.sqrt(x_diff_eye**2 + y_diff_eye**2)

        if eye_dist == 0:
            return (0, 0, 0)

        roll, pitch, yaw = head_angles
        actual_head_dist = eye_dist / (math.cos(yaw * math.pi/180))
        apparent_head_shoulder_ratio = shoulder_dist / actual_head_dist
        apparent_actual_shoulder_ratio = apparent_head_shoulder_ratio / actual_head_shoulder_ratio

        # limit to between 0 and 1 so that it works with acos
        apparent_actual_shoulder_ratio = self.max_min_lim(apparent_actual_shoulder_ratio, 0, 1)

        # use head position to determine shoulder direction
        # pretty scuffed but can't think of a better way for now
        shoulder_sign = -1 if yaw > 0 else 1
        shoulder_angle = shoulder_sign * math.acos(apparent_actual_shoulder_ratio)
        shoulder_tilt = math.atan(y_diff_shoulder / x_diff_shoulder)

        return (0, shoulder_angle, shoulder_tilt)

    def ml_to_vrm_state(self, *args):
        filter_limit = 0.15

        # yaw is turn left-right
        roll, pitch, yaw, eye_aspect_ratio_left, eye_aspect_ratio_right, mouth_aspect_ratio, \
            mouth_distance, left_iris, right_iris, posenet_keypoints, posenet_score = args[0]
    # x_l, y_l, ll, lu = left_iris
        # x_r, y_r, rl, ru = right_iris

        if self.enable_body:
            posenet_keypoints_dict = {kp[2]: (kp[:2] if kp[3] > filter_limit else None)
                                      for kp in posenet_keypoints}
            upperChestX, upperChestY, upperChestZ = self.calc_shoulder_angle(posenet_keypoints_dict,
                                                                             [roll, pitch, yaw],
                                                                             left_iris,
                                                                             right_iris)
        else:
            upperChestX, upperChestY, upperChestZ = 0, 0, 0

        aValue, iValue, uValue, eValue, oValue = self.set_mouth_state(mouth_aspect_ratio,
                                                                      mouth_distance)

        angryValue = 0
        funValue = 0
        jawRotationX = 0
        jawRotationY = 0
        joyValue = 0
        neckRotationX = 0
        neckRotationY = 0
        neutralValue = 0
        sorrowValue = 0

        blinkLeftValue = 1 - self.set_blink(eye_aspect_ratio_left)
        blinkRightValue = 1 - self.set_blink(eye_aspect_ratio_right)

        if blinkLeftValue == 1 or blinkRightValue == 1:
            blinkLeftValue = 1
            blinkRightValue = 1
        else:
            blinkLeftValue = max(blinkLeftValue, blinkRightValue)
            blinkRightValue = blinkLeftValue

        lookAtX = self.set_gaze_left(left_iris, right_iris)
        lookAtY = self.set_gaze_up(left_iris, right_iris)
        lookAtZ = 0

        headRotationX = self.set_head_rotation(pitch*math.pi/180)
        headRotationY = self.set_head_rotation(-yaw*math.pi/180)
        headRotationZ = self.set_head_rotation(-roll*math.pi/180)
        # jawRotationY = set_jaw_rotation_Y(mouth_distance, mouth_aspect_ratio)

        return (aValue, angryValue, blinkLeftValue, blinkRightValue, eValue, funValue,
                headRotationX, headRotationY, headRotationZ, iValue, jawRotationX, jawRotationY,
                joyValue, lookAtX, lookAtY, lookAtZ, neckRotationX, neckRotationY, neutralValue,
                oValue, sorrowValue, upperChestX, upperChestY, upperChestZ, uValue)
