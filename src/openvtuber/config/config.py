from dataclasses import dataclass
from openvtuber import client


@dataclass
class Configuration:
    client: client.Configuration
