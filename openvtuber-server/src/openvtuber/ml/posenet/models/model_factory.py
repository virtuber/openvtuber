import torch
from openvtuber import utils
from .mobilenetv1 import MobileNetV1, MOBILENET_V1_CHECKPOINTS


def load_model(model_id, output_stride):
    """Load the model from a file.

    Attributes:
        model_id: The id of the model.
        output_stride: The output stride that was used when feed-forwarding.
    """
    root = utils.get_project_root()
    path = "openvtuber/assets/"
    model_path = root.joinpath(path + MOBILENET_V1_CHECKPOINTS[model_id] + '.pth')
    model = MobileNetV1(model_id, output_stride=output_stride)
    state_dict = torch.load(model_path)
    model.load_state_dict(state_dict)
    return model
