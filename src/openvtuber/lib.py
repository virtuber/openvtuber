import cv2
from rx import operators as op
from openvtuber import stream, ml, web, control, utils
import threading

import asyncio


loop = asyncio.get_event_loop()


async def show_coroutine(image):
    cv2.imshow('res', image)
    return cv2.waitKey(1) & 0xff


def show(image):
    future = asyncio.run_coroutine_threadsafe(show_coroutine(image), loop)
    future.result()

def send_data(data):
    future = asyncio.run_coroutine_threadsafe(stream.send_data_coro(data), loop)
    future.result()

def main():
    utils.get_assets()
    web_thread = threading.Thread(target=web.run_web_server)
    web_thread.start()
    video = cv2.VideoCapture(0)

    video_stream = stream.cv_videocapture(video)
    grey_stream = video_stream.pipe(op.map(ml.infer))
    grey_stream.subscribe(show)
    ml_stream = video_stream.pipe(op.map(ml.infer_image))
    control_stream = ml_stream.pipe(op.map(control.ml_to_vrm_state))
    control_stream.subscribe(send_data) # Send via WS
    control_stream.subscribe(print)

    loop.run_forever()

    video.release()
    loop.close()


if __name__ == '__main__':  # pragma: no cover
    main()
