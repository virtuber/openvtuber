from dataclasses import dataclass
from openvtuber import web


@dataclass
class Configuration:
    web: web.Configuration
