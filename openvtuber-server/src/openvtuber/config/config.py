from dataclasses import dataclass
from openvtuber import web, control, stream, ml
import yaml


@dataclass
class Configuration:
    web_config: web.Configuration(ip_address = "127.0.0.1", port = 17701, static_files_dir = "openvtuber/client", ws_port = 42069)
    control_config : control.Configuration() 



def read_config(path : str):
    config = Configuration
    """
    Read the configuration file specified by a path 
    """
    try:
        if not path.endswith(".yaml"):
            print("ERROR!!\n \
Invalid configuration file type provided, please provide a .yaml file")
        with open(f'{path}', "r") as file:
            config = yaml.full_load(file)

        for module, items in config.items():
            print(module, ":", items)
    except:
        print("ERROR!!\n \
        path provided is invalid please provide a valid path,\n \
        e.g. \"openvtuber-server/src/openvtuber/config/test.yaml\" \n\
        Default values will be used.")

    return config 

   

#Debug testing
if __name__ == "__main__":
    read_config("openvtuber-server/src/openvtuber/config/test.yaml")
    



    


