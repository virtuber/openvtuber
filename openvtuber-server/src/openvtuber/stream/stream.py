from rx import Observable, interval, operators as op
from cv2 import VideoCapture
from openvtuber.protobufs import VrmStateMessage
import asyncio


class Stream():
    def __init__(self):
        self.queue = None
    # Bootleg queue of one variable
    # This is basically a stream except way worse

    def cv_videocapture(self, v: VideoCapture) -> Observable:
        FPS = 30
        return interval(1 / FPS).pipe(
            op.map(lambda _: v.read()),
            op.filter(lambda data: data[0]),
            op.map(lambda data: data[1]))

    def queue_control_data(self, data):
        # global queue
        self.queue = data

    async def websocket_handler(self, websocket, path):
        # called when the client connects to the server
        while True:
            await asyncio.sleep(0.0333)  # 10 FPS
            if self.queue:
                # extra check to make sure queue is nonempty
                encoded_data = self.control_to_protobuf(self.queue)
                # print(encoded_data)
                # Remove this once we're happy with data egress
                try:
                    await websocket.send(encoded_data)
                except Exception:
                    break  # upon termination of connection, break loop

    def control_to_protobuf(self, args) -> bytes:
        vsm = VrmStateMessage()
        vsm.aValue, vsm.angryValue, vsm.blinkLeftValue, vsm.blinkRightValue, \
            vsm.eValue, vsm.funValue, vsm.headRotationX, vsm.headRotationY, vsm.iValue, \
            vsm.jawRotationX, vsm.jawRotationY, vsm.joyValue, vsm.lookAtX, vsm.lookAtY, \
            vsm.lookAtZ, vsm.neckRotationX, vsm.neckRotationY, vsm.neutralValue, \
            vsm.oValue, vsm.sorrowValue, vsm.uValue = map(float, args)
        return vsm.SerializeToString()
