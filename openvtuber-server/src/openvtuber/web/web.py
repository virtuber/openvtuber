from .config import Configuration as config

import uvicorn
from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from openvtuber import utils

app = FastAPI()

root = utils.get_project_root()
abspath = root.joinpath(config.static_files_dir)
app.mount("/openvtuber", StaticFiles(directory=abspath), name="openvtuber-fastAPI")


def run_web_server():
    uvicorn.run(app, host=config.ip_address, port=config.port)
