import numpy as np
import cv2

class PoseEstimator:
    def __init__(self, prj_root, img_size=(480, 640)):
        self.size = img_size
        self.p_root = prj_root

        # 3d model points
        self.model_points = np.array([
            (0.0, 0.0, 0.0),             # Nose tip
            (0.0, -330.0, -65.0),        # Chin
            (-225.0, 170.0, -135.0),     # Left eye left corner
            (225.0, 170.0, -135.0),      # Right eye right corner
            (-150.0, -150.0, -125.0),    # Mouth left corner
            (150.0, -150.0, -125.0)      # Mouth right corner
        ]) / 4.5

        self.model_points_68 = self._get_full_model_points()

        # Camera internals
        self.focal_length = self.size[1]
        self.camera_center = (self.size[1] / 2, self.size[0] / 2)
        self.camera_matrix = np.array(
            [[self.focal_length, 0, self.camera_center[0]],
             [0, self.focal_length, self.camera_center[1]],
             [0, 0, 1]], dtype="double")

        self.dist_coefs = np.zeros((4, 1))

        self.r_vec = np.array([[0.01891013], [0.08560084], [-3.14392813]])
        self.t_vec = np.array(
            [[-14.97821226], [-10.62040383], [-2053.03596872]])

    def _get_full_model_points(self, filename='openvtuber/assets/model.txt'):
        """Get all 68 3D model points from file"""
        raw_value = []
        filename = str(self.p_root.joinpath("openvtuber/assets/model.txt"))
        with open(filename) as file:
            for line in file:
                raw_value.append(line)
        model_points = np.array(raw_value, dtype=np.float32)
        model_points = np.reshape(model_points, (3, -1)).T

        # Transform the model into a front view.
        model_points[:, 2] *= -1

        return model_points

    def solve_pose_by_68_points(self, image_points):
        """
        Solve pose from all the 68 image points
        Return (rotation_vector, translation_vector) as pose.
        """

        if self.r_vec is None:
            (_, rotation_vector, translation_vector) = cv2.solvePnP(
                self.model_points_68, image_points, self.camera_matrix, self.dist_coefs)
            self.r_vec = rotation_vector
            self.t_vec = translation_vector

        (_, rotation_vector, translation_vector) = cv2.solvePnP(
            self.model_points_68,
            image_points,
            self.camera_matrix,
            self.dist_coefs,
            rvec=self.r_vec,
            tvec=self.t_vec,
            useExtrinsicGuess=True)

        R, _ = cv2.Rodrigues(rotation_vector)
        points_3d = R.dot(self.model_points_68.T) + translation_vector  # 3x68
        reproject_image_points = self.camera_matrix.dot(points_3d).T  # 68x2
        reproject_image_points /= reproject_image_points[:, 2:3]
        reproject_image_points = reproject_image_points[:, :2]
        reprojection_error = np.mean((image_points - reproject_image_points)**2)

        return reprojection_error, rotation_vector, translation_vector

