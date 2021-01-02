from rx import Observable, interval, operators as op
from cv2 import VideoCapture
from openvtuber.protobufs import VrmStateMessage
import asyncio
from collections import deque

ws = None

control_ready = asyncio.Event()

queue: deque = deque([])
# Control stream data is stored inside a queue, and then dequeued when sent into Websocket
# Potential Concern: If the client doesn't connect fast enough, the queue gets too big and explodes


def cv_videocapture(v: VideoCapture) -> Observable:
    FPS = 30
    return interval(1 / FPS).pipe(
        op.map(lambda _: v.read()),
        op.filter(lambda data: data[0]),
        op.map(lambda data: data[1]))


def queue_control_data(data):
    queue.append(data)
    control_ready.set()


async def websocket_handler(websocket, path):
    # called when the client connects to the server
    while True:
        await control_ready.wait()
        if queue:
            # extra check to make sure queue is nonempty
            encoded_data = control_to_protobuf(queue.popleft())
            await websocket.send(encoded_data)
            control_ready.clear()  # clear the event


def control_to_protobuf(args) -> bytes:
    vsm = VrmStateMessage()
    vsm.blinkLeftValue, vsm.blinkRightValue, vsm.headRotationX, vsm.headRotationY, \
        vsm.jawRotationX, vsm.jawRotationY, vsm.lookAtX, vsm.lookAtY, vsm.lookAtZ, \
        vsm.neckRotationX, vsm.neckRotationY = map(float, args)
    return vsm.SerializeToString()
