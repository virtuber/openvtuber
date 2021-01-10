import cv2
from rx import operators as op
from openvtuber import stream, ml, web, control, utils
from openvtuber.web.config import Configuration as config
import threading
import websockets
import asyncio
import click


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


def debug_print(data):
    if data is not None:
        roll, pitch, yaw, ear_left, ear_right, mar, mdst, left_iris, right_iris = data
        print(roll, pitch, yaw)
    else:
        print(None)


@click.command()
@click.option('--debug', required=False, type=str, help='enable debug output', default="false")
@click.option('--config_path', required=False, type=str,
              help='filepath to config file for app', default=".")
def main(debug, config_path):
    if debug != "false" and debug != "true":
        print("ERROR!!\n \
debug flag must be equal 'true' or 'false',\n \
e.g. --debug=true or --debug=false")
        return

    utils.get_assets()
    inference = ml.Inference()
    web_thread = threading.Thread(target=web.run_web_server)
    web_thread.start()

    video = cv2.VideoCapture(0)

    video_stream = stream.cv_videocapture(video)
    ml_stream = video_stream.pipe(op.map(inference.infer_image))

    if debug == 'true':
        grey_stream = video_stream.pipe(op.map(ml.infer))
        grey_stream.subscribe(show)
        ml_stream.subscribe(debug_print)

    control_stream = ml_stream.pipe(op.filter(lambda x: x), op.map(control.ml_to_vrm_state))
    control_stream.subscribe(stream.queue_control_data)  # push to queue

    start_server = websockets.serve(stream.websocket_handler,
                                    config.ip_address, config.ws_port)

    loop.run_until_complete(start_server)
    loop.run_forever()

    video.release()
    loop.close()


if __name__ == '__main__':  # pragma: no cover
    main()
