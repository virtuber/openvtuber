from pathlib import Path
import requests


def get_project_root() -> Path:
    """
    Returns path of project root (where setup.py is)
    """
    return Path(__file__).parent.parent


def get_assets():
    root = get_project_root()
    abspath = root.joinpath("openvtuber/assets")
    base_url = "https://storage.googleapis.com/openvtuber/assets/"
    files = ["deploy.prototxt", "model.txt", "res10_300x300_ssd_iter_140000.caffemodel",
             "shape_predictor_68_face_landmarks.dat"]
    if not abspath.exists():
        abspath.mkdir()
        for file in files:
            url = base_url + file
            r = requests.get(url)
            with open(abspath.joinpath(file), "wb") as f:
                f.write(r.content)
