from dataclasses import dataclass
from openvtuber import web, control, stream, ml
import yaml

#Web config     

@dataclass
class Configuration:
    web: web.Configuration(ip_address = "127.0.0.1", port = 17701, static_files_dir = "openvtuber/client", ws_port = 42069)
    #control : 
    pass




def read_config():
    with open(r"src/openvtuber/config/test.yaml") as file:
        config = yaml.full_load(file)

    for module, items in config.items():
        print(module, ":", items)


if __name__ == "__main__":
    read_config()



    


