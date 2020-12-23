from rx import Observable, interval, operators as op
from cv2 import VideoCapture


def cv_videocapture(v: VideoCapture) -> Observable:
    FPS = 30
    return interval(1 / FPS).pipe(
        op.map(lambda _: v.read()),
        op.filter(lambda data: data[0]),
        op.map(lambda data: data[1]))
