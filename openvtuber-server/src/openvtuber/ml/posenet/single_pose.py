import torch
from .constants import Constants


def argmax2d(inputs):
    height, width, depth = list(inputs.size())
    reshaped = torch.reshape(inputs, (height*width, depth))
    coords = torch.argmax(reshaped, 0)

    y_coords = torch.unsqueeze(torch.floor_divide(coords, width), 1)
    x_coords = torch.unsqueeze(torch.remainder(coords, width), 1)

    return torch.cat((y_coords, x_coords), 1)


def get_offset_point(y: int, x: int, keypoint: int, offsets):
    out_y = offsets[y][x][keypoint]
    out_x = offsets[y][x][keypoint+Constants.num_keypoints]
    return (out_y, out_x)


def get_offset_vectors(heatmap_coords, offsets, device):
    result = []
    for keypoint in range(Constants.num_keypoints):
        heatmap_y = heatmap_coords[keypoint][0].item()
        heatmap_x = heatmap_coords[keypoint][1].item()
        y, x = get_offset_point(heatmap_y, heatmap_x, keypoint, offsets)
        result.append([y, x])
    return torch.tensor(result, device=device)


def get_offset_points(heatmap_coords, output_stride, offsets, device):
    offset_vectors = get_offset_vectors(heatmap_coords, offsets, device)
    return torch.add(torch.mul(heatmap_coords, output_stride), offset_vectors)


def get_points_confidence(heatmap_scores, heatmap_coords):
    num_keypoints = heatmap_coords.size()[0]
    result = [0.0]*num_keypoints

    for keypoint in range(num_keypoints):
        y = heatmap_coords[keypoint][0]
        x = heatmap_coords[keypoint][1]
        result[keypoint] = heatmap_scores[y][x][keypoint]
    return result


def decode_single_pose(heatmap_scores, offsets, output_stride: int, device):
    """Detects a single pose and finds its parts from part scores and offset vectors.

    It returns a single pose detection. It works as follows:
    argmax2d is done on the scores to get the y and x index in the heatmap
    with the highest score for each part, which is essentially where the
    part is most likely to exist. This produces a tensor of size 17x2, with
    each row being the y and x index in the heatmap for each keypoint.
    The offset vector for each for each part is retrieved by getting the
    y and x from the offsets corresponding to the y and x index in the
    heatmap for that part. This produces a tensor of size 17x2, with each
    row being the offset vector for the corresponding keypoint.
    To get the keypoint, each part’s heatmap y and x are multiplied
    by the output stride then added to their corresponding offset vector,
    which is in the same scale as the original image.
    """
    heatmap_values = argmax2d(heatmap_scores)

    offset_points = get_offset_points(heatmap_values, output_stride, offsets, device)
    keypoint_confidence = get_points_confidence(heatmap_scores, heatmap_values)

    total_score = sum(keypoint_confidence)

    def keypoint_confidence_mapping(args):
        keypoint_id, score = args
        position_y = offset_points[keypoint_id][0].item()
        position_x = offset_points[keypoint_id][1].item()
        part = Constants.part_names[keypoint_id]
        score = score
        return (position_y, position_x, part, score)
    keypoints = list(map(keypoint_confidence_mapping, enumerate(keypoint_confidence)))
    return (keypoints, total_score/len(keypoints))
