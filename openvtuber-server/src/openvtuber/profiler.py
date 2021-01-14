"""
import cProfile
import cv2
from openvtuber import ml

video = cv2.VideoCapture(0)

inference = ml.Inference()

for n in range(7):
    _, frame = video.read()
    cProfile.run('inference.infer_image(frame)')

video.release()
"""
