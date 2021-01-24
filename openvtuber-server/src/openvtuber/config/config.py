from dataclasses import dataclass
from openvtuber import web, control, stream, ml
import yaml


@dataclass
class Configuration:
    web: web.Configuration(ip_address = "127.0.0.1", port = 17701, static_files_dir = "openvtuber/client", ws_port = 42069)
    #control : 
    pass



#Read the configuration file specified by the path parameter
def read_config(path : str):
    try:
        if not path.endswith(".yaml"):
            print("ERROR!!\n \
Invalid configuration file type provided, please provide a .yaml file")
            return
        with open(f'{path}', "r") as file:
            config = yaml.full_load(file)

        for module, items in config.items():
            print(module, ":", items)

    except:
        print("ERROR!!\n \
path provided is invalid please provide a valid,\n \
e.g. \"openvtuber-server/src/openvtuber/config/test.yaml\"")

   



if __name__ == "__main__":
    read_config("openvtuber-server/src/openvtuber/config/test.yaml")
    



    


