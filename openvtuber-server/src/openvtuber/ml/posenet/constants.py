from dataclasses import dataclass, field
from typing import Dict, Tuple


def make_part_ids():
    return {
        'nose': 0, 'leftEye': 1, 'rightEye': 2, 'leftEar': 3, 'rightEar': 4,
        'leftShoulder': 5, 'rightShoulder': 6, 'leftElbow': 7, 'rightElbow': 8,
        'leftWrist': 9, 'rightWrist': 10, 'leftHip': 11, 'rightHip': 12, 'leftKnee': 13,
        'rightKnee': 14, 'leftAnkle': 15, 'rightAnkle': 16}


@dataclass(frozen=True)
class Constants:
    """Constants for posenet

    Attributes:
        part_names: The names of the parts.
        num_keypoints: The number of keypoints.
        part_ids: The id to name relationship for parts.
        connected_part_names: The pairs of connected parts.
        pose_chain: This defines the parent->child relationships of our tree. Arbitrarily this
                    defines the nose as the root of the tree, however since we will infer the
                    displacement for both parent->child and child->parent, we can define the
                    tree root as any node.
        connected_part_indices: The indices of connected parts.
        part_channels: The names of the part channels.
    """
    part_names: Tuple[str, ...] = (
        'nose', 'leftEye', 'rightEye', 'leftEar', 'rightEar', 'leftShoulder',
        'rightShoulder', 'leftElbow', 'rightElbow', 'leftWrist', 'rightWrist',
        'leftHip', 'rightHip', 'leftKnee', 'rightKnee', 'leftAnkle', 'rightAnkle'
    )
    num_keypoints: int = 17  # len(self.part_names)
    # {part_name: part_id for part_id, part_name in enumerate(self.part_names)}
    part_ids: Dict[str, int] = field(default_factory=make_part_ids)
    connected_part_names: Tuple[Tuple[str, str], ...] = (
        ('leftHip', 'leftShoulder'), ('leftElbow', 'leftShoulder'),
        ('leftElbow', 'leftWrist'), ('leftHip', 'leftKnee'),
        ('leftKnee', 'leftAnkle'), ('rightHip', 'rightShoulder'),
        ('rightElbow', 'rightShoulder'), ('rightElbow', 'rightWrist'),
        ('rightHip', 'rightKnee'), ('rightKnee', 'rightAnkle'),
        ('leftShoulder', 'rightShoulder'), ('leftHip', 'rightHip')
    )
    pose_chain: Tuple[Tuple[str, str], ...] = (
        ('nose', 'leftEye'), ('leftEye', 'leftEar'), ('nose', 'rightEye'),
        ('rightEye', 'rightEar'), ('nose', 'leftShoulder'),
        ('leftShoulder', 'leftElbow'), ('leftElbow', 'leftWrist'),
        ('leftShoulder', 'leftHip'), ('leftHip', 'leftKnee'),
        ('leftKnee', 'leftAnkle'), ('nose', 'rightShoulder'),
        ('rightShoulder', 'rightElbow'), ('rightElbow', 'rightWrist'),
        ('rightShoulder', 'rightHip'), ('rightHip', 'rightKnee'),
        ('rightKnee', 'rightAnkle')
    )
    """
    ((self.part_ids(joint_name_a), self.part_ids(joint_name_b))
        for joint_name_a, joint_name_b in self.connected_part_names)
    """
    connected_part_indices: Tuple[Tuple[int, int], ...] = (
        (11, 5), (7, 5), (7, 9), (11, 13), (13, 15), (12, 6), (8, 6),
        (8, 10), (12, 14), (14, 16), (5, 6), (11, 12))
    part_channels: Tuple[str, ...] = (
        'left_face',
        'right_face',
        'right_upper_leg_front',
        'right_lower_leg_back',
        'right_upper_leg_back',
        'left_lower_leg_front',
        'left_upper_leg_front',
        'left_upper_leg_back',
        'left_lower_leg_back',
        'right_feet',
        'right_lower_leg_front',
        'left_feet',
        'torso_front',
        'torso_back',
        'right_upper_arm_front',
        'right_upper_arm_back',
        'right_lower_arm_back',
        'left_lower_arm_front',
        'left_upper_arm_front',
        'left_upper_arm_back',
        'left_lower_arm_back',
        'right_hand',
        'right_lower_arm_front',
        'left_hand'
    )
