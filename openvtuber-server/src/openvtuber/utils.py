from pathlib import Path
import requests


def get_project_root() -> Path:
    """
    Returns path of project root (where setup.py is)
    """
    return Path(__file__).parent.parent


def download_file_from_google_drive(id, destination):
    def get_confirm_token(response):
        for key, value in response.cookies.items():
            if key.startswith('download_warning'):
                return value

        return None

    def save_response_content(response, destination):
        CHUNK_SIZE = 32768

        with open(destination, "wb") as f:
            for chunk in response.iter_content(CHUNK_SIZE):
                if chunk:  # filter out keep-alive new chunks
                    f.write(chunk)

    URL = "https://drive.google.com/uc?export=download"

    session = requests.Session()

    response = session.get(URL, params={'id': id}, stream=True)
    token = get_confirm_token(response)

    if token:
        params = {'id': id, 'confirm': token}
        response = session.get(URL, params=params, stream=True)

    save_response_content(response, destination)


def get_assets():
    root = get_project_root()
    abspath = root.joinpath("openvtuber/assets")
    files = {"deploy.prototxt": "1AEBkKiDXbnY9QvaHcuWIr6zJOZhUaSrs",
             "model.txt": "1IH492IfFkySd6A4H6hw5CTJ_-QmPuQOp",
             "res10_300x300_ssd_iter_140000.caffemodel": "1JXLj3G9iog1dMNo4K6DxkSzN51PuDT44",
             "shape_predictor_68_face_landmarks.dat": "16F2KCj-Bm8e4i_X6zaRvGRTl44HRQoNu",
             "mobilenet_v1_101.pth": "1X-JVNUwQwzsOu7V77avHuQANgn-C7X1B"}
    if not abspath.exists():
        abspath.mkdir()
    for file, id in files.items():
        if not abspath.joinpath(file).exists():
            download_file_from_google_drive(id, abspath.joinpath(file))


if __name__ == "__main__":
    get_assets()
