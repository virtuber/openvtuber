from dataclasses import dataclass

@dataclass
class Configuration():
    ip_address: str 
    port: int
    static_files_dir: str
    ws_port: int

    def __init__(self, ip_address, port, static_files_dir, ws_port):
        self.ip_address = ip_address
        self.port = port
        self.static_files_dir = static_files_dir
        self.ws_port = ws_port
