from rx import Observable, interval, operators as op
from cv2 import VideoCapture
from openvtuber.protobufs import VrmStateMessage
import websockets
import base64

ws = websockets.connect(f"ws://localhost:42069")


def cv_videocapture(v: VideoCapture) -> Observable:
    FPS = 30
    return interval(1 / FPS).pipe(
        op.map(lambda _: v.read()),
        op.filter(lambda data: data[0]),
        op.map(lambda data: data[1]))


async def send_data_coro(data):
    encoded_data = control_to_protobuf(data)

    # Called every time the control stream produces a finished set of data to export
    await ws.send(encoded_data)


def control_to_protobuf(args) -> str:
    vsm = VrmStateMessage()
    vsm.blinkLeftValue, vsm.blinkRightValue, vsm.headRotationX, vsm.headRotationY, \
        vsm.jawRotationX, vsm.jawRotationY, vsm.lookAtX, vsm.lookAtY, vsm.lookAtZ, \
        vsm.neckRotationX, vsm.neckRotationY = map(float, args)
    return base64.b64encode(vsm.SerializeToString())
