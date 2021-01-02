import cProfile
import cv2
from openvtuber import ml

video = cv2.VideoCapture(0)

for n in range(4):
    _, frame = video.read()
    cProfile.run('ml.infer_image(frame)')

video.release()
