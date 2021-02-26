from dataclasses import dataclass
from ..config import Configuration as config

@dataclass
class Configuration:
    ip_address: str = config.web.ip_address
    port: int = config.web.port
    static_files_dir: str = config.web.static_files_dir
    ws_port: int = config.web.ws_port

