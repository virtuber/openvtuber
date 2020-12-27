import cv2
from rx import operators as op
from openvtuber import stream, ml, web
import threading

import asyncio


loop = asyncio.get_event_loop()


async def show_coroutine(image):
    cv2.imshow('res', image)
    return cv2.waitKey(1) & 0xff


def show(image):
    future = asyncio.run_coroutine_threadsafe(show_coroutine(image), loop)
    future.result()


def main():
    web_thread = threading.Thread(target=web.run_web_server)
    web_thread.start()
    video = cv2.VideoCapture(0)

    video_stream = stream.cv_videocapture(video)
    grey_stream = video_stream.pipe(op.map(ml.infer))
    grey_stream.subscribe(show)
    loop.run_forever()

    video.release()
    loop.close()


if __name__ == '__main__':  # pragma: no cover
    main()
