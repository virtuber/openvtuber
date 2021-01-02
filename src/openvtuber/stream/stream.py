from web.config import Configuration as config
from rx import Observable, interval, operators as op
from cv2 import VideoCapture
from openvtuber.protobufs import VrmStateMessage
import websockets
import base64

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
    encoded_data = control_to_protobuf(data)
    await ws.send(encoded_data)

async def ack(websocket, path):
    async for message in websocket:
        # Acknowledge recipt of incoming data, if any
        # Idk, just needed to fill some space here I guess
        # Terminates upon connection loss with client
        pass
    print("Connection with client terminated.")

def control_to_protobuf(args) -> str:
    vsm = VrmStateMessage()
    vsm.blinkLeftValue, vsm.blinkRightValue, vsm.headRotationX, vsm.headRotationY, \
        vsm.jawRotationX, vsm.jawRotationY, vsm.lookAtX, vsm.lookAtY, vsm.lookAtZ, \
        vsm.neckRotationX, vsm.neckRotationY = map(float, args)
    return base64.b64encode(vsm.SerializeToString())
