from web.config import Configuration as config
from rx import Observable, interval, operators as op
from cv2 import VideoCapture
import websockets

ws = None

async def connect_ws():
    global ws
    ws = await websockets.connect(f"ws://{config.ip_address}:{config.ws_port}")

def cv_videocapture(v: VideoCapture) -> Observable:
    FPS = 30
    return interval(1 / FPS).pipe(
        op.map(lambda _: v.read()),
        op.filter(lambda data: data[0]),
        op.map(lambda data: data[1]))

async def send_data_coro(data):
    # Called every time the control stream produces a finished set of data to export
    await ws.send(str(data)) # SCUFFED CODE PLS IGNORE

async def ack(websocket, path):
    async for message in websocket:
        # Acknowledge recipt of incoming data, if any
        # Idk, just needed to fill some space here I guess
        # Terminates upon connection loss with client
        pass
    print("Connection with client terminated.")