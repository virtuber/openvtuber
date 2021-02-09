from urllib import request
from urllib.error import URLError
from typing import Tuple, Any
from functools import reduce
import time
from .config import Configuration as config


def send_telemetry(args):
    data = make_body(args)
    url = "http://{}:{}/write?db={}".format(config.ip_address, config.port, config.db_name)
    data = str.encode(data)
    req = request.Request(url, data=data)
    try:
        request.urlopen(req)
    except URLError:
        print("Failed telemetry request")


def make_body(args):
    timestamp = int(round(time.time() * 1000000000))
    roll, pitch, yaw, ear_left, ear_right, mar, mdst, \
        left_iris, right_iris, posenet_keypoints, posenet_score = args

    data = [('roll', roll), ('pitch', pitch), ('yaw', yaw), ('ear_left', ear_left),
            ('ear_right', ear_right), ('mar', mar), ('mdst', mdst), ('left_iris_x', left_iris[0]),
            ('left_iris_y', left_iris[1]), ('left_iris_left', left_iris[2]),
            ('left_iris_up', left_iris[3]), ('right_iris_x', right_iris[0]),
            ('right_iris_y', right_iris[1]), ('right_iris_left', right_iris[2]),
            ('right_iris_up', right_iris[3]), ('posenet_score', posenet_score)]
    data.extend([(keypoint[2]+"_x", keypoint[1]) for keypoint in posenet_keypoints])
    data.extend([(keypoint[2]+"_y", keypoint[0]) for keypoint in posenet_keypoints])

    def transform_to_field(data: Tuple[str, Any]):
        metric_name, value = data
        return "{} value={} {}".format(metric_name, value, timestamp)

    return reduce(lambda a, b: a+"\n"+b, map(transform_to_field, data))
