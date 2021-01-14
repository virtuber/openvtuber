import cv2
from rx import operators as op
from openvtuber import stream, ml, web, control, utils
from openvtuber.config import config  
from openvtuber.web.config import Configuration as web_config
import threading
import websockets
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
    config.read_config()
    utils.get_assets()
    inference = ml.Inference()
    web_thread = threading.Thread(target=web.run_web_server)
    web_thread.daemon = True  # makes thread die when main is interrupted.
    # Now you don't need to spam ctrl c 37 times in a row
    web_thread.start()

    video = cv2.VideoCapture(0)

    video_stream = stream.cv_videocapture(video)
    # grey_stream = video_stream.pipe(op.map(ml.infer))
    # grey_stream.subscribe(show)
    ml_stream = video_stream.pipe(op.map(inference.infer_image))
    ml_stream.subscribe(print)
    control_stream = ml_stream.pipe(op.filter(lambda x: x), op.map(control.ml_to_vrm_state))
    control_stream.subscribe(stream.queue_control_data)  # push to queue

    start_server = websockets.serve(stream.websocket_handler,
                                    web_config.ip_address, web_config.ws_port)

    loop.run_until_complete(start_server)
    loop.run_forever()

    video.release()
    loop.close()


if __name__ == '__main__':  # pragma: no cover
    main()