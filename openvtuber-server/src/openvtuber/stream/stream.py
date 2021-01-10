from rx import Observable, interval, operators as op
from cv2 import VideoCapture
from openvtuber.protobufs import VrmStateMessage
import asyncio

ws = None

queue = None
# Bootleg queue of one variable
# This is basically a stream except way worse


def cv_videocapture(v: VideoCapture) -> Observable:
    FPS = 30
    return interval(1 / FPS).pipe(
        op.map(lambda _: v.read()),
        op.filter(lambda data: data[0]),
        op.map(lambda data: data[1]))


def queue_control_data(data):
    global queue
    queue = data


async def websocket_handler(websocket, path):
    # called when the client connects to the server
    while True:
        await asyncio.sleep(0.1)  # 10 FPS
        if queue:
            # extra check to make sure queue is nonempty
            encoded_data = control_to_protobuf(queue)
            print(encoded_data)
            # Remove this once we're happy with data egress
            try:
                await websocket.send(encoded_data)
            except Exception:
                break  # upon termination of connection, break loop


def control_to_protobuf(args) -> bytes:
    vsm = VrmStateMessage()
    vsm.blinkLeftValue, vsm.blinkRightValue, vsm.headRotationX, vsm.headRotationY, \
        vsm.jawRotationX, vsm.jawRotationY, vsm.lookAtX, vsm.lookAtY, vsm.lookAtZ, \
        vsm.neckRotationX, vsm.neckRotationY = map(float, args)
    return vsm.SerializeToString()
