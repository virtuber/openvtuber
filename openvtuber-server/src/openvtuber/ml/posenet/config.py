from dataclasses import dataclass


@dataclass
class Configuration:
    """Configuration for posenet

    Attributes:
        scale_factor: What to scale the image by before feeding it through the network.
        flip_horizontal: If the poses should be flipped/mirrored horizontally.
        output_stride: The output stride that was used when feed-forwarding through the PoseNet
                       model.  Must be 32, 16, or 8.
        model_id: The number of layers for the model.
    """
    scale_factor: float = 0.50
    flip_horizontal: bool = True
    output_stride: int = 16
    model_id: int = 101
