from dataclasses import dataclass


@dataclass()
class Configuration:
    ip_address: str = 'localhost'
    port: str = '8086'
    db_name: str = 'influx'
