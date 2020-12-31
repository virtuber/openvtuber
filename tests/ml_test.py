import pytest
from openvtuber.ml import infer
import cv2
import os


@pytest.mark.lib
def test_infer(capsys):
    path = os.path.dirname(__file__)
    rel_path = 'vscout.png'
    in_img = cv2.imread(os.path.join(path, rel_path), cv2.IMREAD_COLOR)
    img = infer(in_img)
    assert (img.size != 0)
