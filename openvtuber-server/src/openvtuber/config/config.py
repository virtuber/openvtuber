from dataclasses import dataclass
from os import path
from openvtuber import web
import yaml

@dataclass(unsafe_hash=True)
class Configuration:
    web = web.Configuration(ip_address = "127.0.0.1", port = 17701, static_files_dir = "openvtuber/client", ws_port = 42069)
    #control_config : control.Configuration(ADD IN DEFAULT VALUES ONCE A CONFIGURATION IS CREATED)
    #stream_config :  
    #ml_config : 
    #stream_config :  

    def __init__(self, config_path):
        """
        Read in configuration file specified by a path 
        """
        if path.isfile(config_path) and config_path.endswith('.yaml'):
            try:
                with open(config_path, 'r') as file:
                    data = yaml.full_load(file)
                self.web_config = web.Configuration(data[0]['web']['ip_address'], data[0]['web']['port'], data[0]['web']['static_files_dir'], data[0]['web']['ws_port'])
                #config.control_config = Add once more config classes are created
            except:
                print("ERROR!!\nConfiguration file could not be opened. \nDefault values will be used")
        else:
            print("ERROR!!\n\
            Path provided is invalid please provide a valid path to a .yaml file,\n\
            e.g. --config_path=\"openvtuber-server/src/openvtuber/config/test.yaml\" \n\
            Default values will be used.")    
