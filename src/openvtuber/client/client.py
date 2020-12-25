from .config import Configuration as config

from flask import Flask, send_from_directory
import os

app = Flask(__name__, static_url_path='')


@app.route('/openvtuber/<path:path>')
def serve_pwa(path):
    abspath = os.path.abspath(config.static_files_dir)
    return send_from_directory(abspath, path)


def run_web_server():
    app.run(host=config.ip_address, port=config.port, use_reloader=False, debug=True)
