from _typeshed import AnyPath
import yaml
from dataclasses import dataclass
from os import path
from openvtuber import web, control, stream, 


@dataclass
class Configuration:
    web_config: web.Configuration(ip_address = "127.0.0.1", port = 17701, static_files_dir = "openvtuber/client", ws_port = 42069)
    #control_config : control.Configuration(ADD IN DEFAULT VALUES ONCE A CONFIGURATION IS CREATED)
    #stream_config :  
    #ml_config : 

          
    def read_config(config_path : AnyPath):
        """
        Read in configuration file specified by a path 
        """
        config = Configuration

        if path.isfile(config_path):
            if path.endswith('.yaml'):
                try:
                    with open(f'{path}', 'r') as file:
                        config = yaml.full_load(file)
                    for module, items in config.items:
                        if items == "":
                            config = Configuration
                            return config
                except:
                    print("ERROR!!\nConfiguration file could not be opened.")
            else:
                print("ERROR!!\nInvalid file type, please provide a .yaml file.")
        else:
            print("ERROR!!\n\
            Path provided is invalid please provide a valid path,\n\
            e.g. \"openvtuber-server/src/openvtuber/config/test.yaml\" \n\
            Default values will be used.")
        return config 


    


