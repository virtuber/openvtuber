"""
import cProfile
import cv2
from openvtuber import ml

def test():
    video = cv2.VideoCapture(0)

    inference = ml.Inference()

    for n in range(20):
    # while True:
        _, frame = video.read()
        inference.infer_image(frame)

    video.release()

cProfile.run('test()')
# test()
"""
