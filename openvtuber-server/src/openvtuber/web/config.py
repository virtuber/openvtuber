import openvtuber.config as config

@config.dataclass
class Configuration:
    ip_address: str = config.Configuration.ip_address
    port: int = config.Configuration.port
    static_files_dir: str = config.Configuration.static_files_dir
    ws_port: int = config.Configuration.port
