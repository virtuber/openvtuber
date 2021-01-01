from config import Configuration as config
from rx import Observable, interval, operators as op
from cv2 import VideoCapture
import websockets

ws = websockets.connect(f"ws://localhost:42069")

def cv_videocapture(v: VideoCapture) -> Observable:
    FPS = 30
    return interval(1 / FPS).pipe(
        op.map(lambda _: v.read()),
        op.filter(lambda data: data[0]),
        op.map(lambda data: data[1]))

async def send_data_coro(data):
    # Called every time the control stream produces a finished set of data to export
    await ws.send(data)
