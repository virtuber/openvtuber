from dataclasses import dataclass


@dataclass
class Configuration:
    ip_address: str = "0.0.0.0"
    port: int = 17701
    static_files_dir: str = "openvtuber-client/build"
