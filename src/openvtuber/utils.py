from pathlib import Path


def get_project_root() -> Path:
    """
    Returns path of project root (where setup.py is)
    """
    return Path(__file__).parent.parent
