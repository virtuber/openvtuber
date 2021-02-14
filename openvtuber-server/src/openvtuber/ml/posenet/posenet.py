from .config import Configuration as config
from .models import load_model
from .single_pose import decode_single_pose
import numpy as np
import cv2
import torch


def valid_resolution(width, height, output_stride):
    target_width = (int(width) // output_stride) * output_stride + 1
    target_height = (int(height) // output_stride) * output_stride + 1
    return target_width, target_height


def preprocess_image(source_img, scale_factor=1.0, output_stride=config.output_stride):
    target_width, target_height = valid_resolution(
        source_img.shape[1] * scale_factor,
        source_img.shape[0] * scale_factor, output_stride=output_stride)
    scale = [source_img.shape[0] / target_height, source_img.shape[1] / target_width]

    input_img = cv2.resize(source_img, (target_width, target_height),
                           interpolation=cv2.INTER_LINEAR)
    input_img = cv2.cvtColor(input_img, cv2.COLOR_BGR2RGB).astype(np.float32)
    input_img = input_img * (2.0 / 255.0) - 1.0
    input_img = input_img.transpose((2, 0, 1)).reshape(1, 3, target_height, target_width)
    return input_img, scale


class PoseNet(object):
    def __init__(self):
        if torch.cuda.is_available():
            self.device = torch.device('cuda')
        else:
            self.device = torch.device('cpu')
        self.model = load_model(config.model_id, config.output_stride).to(self.device)
        self.output_stride = self.model.output_stride

    def estimate_single_pose(self, image):
        img, scale = preprocess_image(image)
        with torch.no_grad():
            input = torch.tensor(img, device=self.device)
            heatmap_scores, offsets, displacement_fwd, displacement_bwd = self.model(input)
            keypoints, score = decode_single_pose(
                heatmap_scores.squeeze(0).permute(1, 2, 0),
                offsets.squeeze(0).permute(1, 2, 0), self.output_stride, self.device)

        def multiply_by_scale(args):
            y, x, part, score = args
            keypoint_y = y * scale[0]
            keypoint_x = x * scale[1]
            return (keypoint_y, keypoint_x, part, score.item())
        keypoints = tuple(map(multiply_by_scale, keypoints))

        return (keypoints, score.item())
