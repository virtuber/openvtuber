import uvicorn
from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from openvtuber import utils


def run_web_server(config):
    app = FastAPI()
    root = utils.get_project_root()
    abspath = root.joinpath(config.web.static_files_dir)
    app.mount("/openvtuber", StaticFiles(directory=str(abspath)), name="openvtuber-fastAPI")
    uvicorn.run(app, host=config.web.ip_address, port=config.web.port)
