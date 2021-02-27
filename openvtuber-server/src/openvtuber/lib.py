import cv2
from rx import operators as op
from openvtuber import stream, ml, web, control, utils, data_filter
from openvtuber.stream import cv_videocapture
from openvtuber.web.config import Configuration as config
from openvtuber.debug import send_telemetry
import threading
import websockets
import asyncio
import click
import multiprocessing


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


@click.command()
@click.option('--debug', required=False, type=str, help='enable debug output', default="false")
@click.option('--cam', required=False, type=str, help='enable cam output', default="false")
@click.option('--linear_extrap', required=False, type=str,
              help='uses linear extrapolation to speed up ml module', default="false")
@click.option('--config_path', required=False, type=str,
              help='filepath to config file for app', default=".")
@click.option('--enable_body', required=False, type=str, help='enable body tracking', default="true")
def main(debug, cam, linear_extrap, config_path, enable_body):
    if debug != "false" and debug != "true":
        print("ERROR!!\n \
debug flag must be equal 'true' or 'false',\n \
e.g. --debug=true or --debug=false")
        return
    else:
        debug = (debug == "true")

    if cam != "false" and cam != "true":
        print("ERROR!!\n \
cam flag must be equal 'true' or 'false',\n \
e.g. --cam=true or --cam=false")
        return
    else:
        cam = (cam == "true")

    if linear_extrap != "false" and linear_extrap != "true":
        print("ERROR!!\n \
linear_extrap flag must be equal 'true' or 'false',\n \
e.g. --linear_extrap=true or --linear_extrap=false")
        return
    else:
        linear_extrap = (linear_extrap == "true")

    if enable_body != "false" and enable_body != "true":
        print("ERROR!!\n \
enable_body flag must be equal 'true' or 'false',\n \
e.g. --enable_body=true or --enable_body=false")
    else:
        enable_body = (enable_body == "true")
        

    utils.get_assets()
    inference = ml.Inference(enable_body, linear_extrap)
    web_thread = threading.Thread(target=web.run_web_server)
    web_thread.daemon = True  # makes thread die when main is interrupted.
    # Now you don't need to spam ctrl c 37 times in a row
    web_thread.start()

    video = cv2.VideoCapture(0)

    s = stream.Stream()

    video_stream = cv_videocapture(video)
    ml_stream = video_stream.pipe(op.map(inference.infer_image))

    ctrl = control.Control(enable_body)

    if cam:
        vid_stream = video_stream.pipe(op.map(ml.display))
        vid_stream.subscribe(show)

    if debug:
        ml_stream.pipe(op.filter(lambda x: x)).subscribe(send_telemetry)

    # use filter with identity function, None values are filtered out
    control_stream = ml_stream.pipe(
        op.filter(lambda x: x), op.map(ctrl.ml_to_vrm_state))
    # control_stream.subscribe(s.queue_control_data)  # push to queue

    out_filter = data_filter.OutputFilter()

    """
    if you change what is being filtered, make sure to go into filter.py
    and to modify the exclusion set accordingly
    """
    filter_stream = control_stream.pipe(op.map(out_filter.get_filtered_val))
    filter_stream.subscribe(s.queue_control_data)

    start_server = websockets.serve(s.websocket_handler,
                                    config.ip_address, config.ws_port)

    loop.run_until_complete(start_server)
    loop.run_forever()

    video.release()
    loop.close()


if __name__ == '__main__':  # pragma: no cover
    multiprocessing.freeze_support()
    main()
