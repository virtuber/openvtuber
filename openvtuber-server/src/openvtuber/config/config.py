from dataclasses import dataclass
from os import path
from openvtuber import web
import yaml


@dataclass()
class Configuration:
    web = web.Configuration(ip_address="127.0.0.1", port=17701,
                            static_files_dir="openvtuber/client", ws_port=42069)
    # Read in config file specificed by the path

    def __init__(self, config_path):
        if path.isfile(config_path) and config_path.endswith('.yaml'):
            try:
                with open(config_path, 'r') as file:
                    data = yaml.full_load(file)
                self.web = web.Configuration(data[0]['web']['ip_address'], data[0]['web']['port'],
                                             data[0]['web']['static_files_dir'], data[0]['web']
                                             ['ws_port'])
            except IOError:
                print("ERROR!!\nConfiguration file could not be opened. \n\
                    Default values will be used")
        else:
            print("ERROR!!\n\
            Path provided is invalid please provide a valid path to a .yaml file,\n\
            e.g. --config_path=\"openvtuber-server/src/openvtuber/config/test.yaml\" \n\
            Default values will be used.")
