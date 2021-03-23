import uvicorn
from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from openvtuber import utils

app = FastAPI()
root = utils.get_project_root()
abspath = root.joinpath("openvtuber/client")
app.mount("/openvtuber", StaticFiles(directory=str(abspath)), name="openvtuber-fastAPI")


def run_web_server(config):
    uvicorn.run(app, host=config.web.ip_address, port=config.web.port)
