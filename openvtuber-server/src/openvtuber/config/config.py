from dataclasses import dataclass
from os import path
from openvtuber import web, control, stream
import yaml
import click

@dataclass
class Configuration:
    web: web.Configuration(ip_address = "127.0.0.1", port = 17701, static_files_dir = "openvtuber/client", ws_port = 42069)
    #control_config : control.Configuration(ADD IN DEFAULT VALUES ONCE A CONFIGURATION IS CREATED)
    #stream_config :  
    #ml_config : 
    #stream_config : 

          
    def read_config(config_path):
        """
        Read in configuration file specified by a path 
        """
        config = Configuration
        if path.isfile(config_path) and config_path.endswith('.yaml'):
            try:
                with open(config_path, 'r') as file:
                    data = yaml.full_load(file)
                config.web = web.Configuration(data[0]['web']['ip_address'], data[0]['web']['port'], data[0]['web']['static_files_dir'], data[0]['web']['ws_port'])
                #config.control_config = Add once more config classes are created
            except:
                print("ERROR!!\nConfiguration file could not be opened. \nDefault values will be used")
        else:
            print("ERROR!!\n\
            Path provided is invalid please provide a valid path to a .yaml file,\n\
            e.g. --config_path=\"openvtuber-server/src/openvtuber/config/test.yaml\" \n\
            Default values will be used.")
        return config 

@click.command()
@click.option('--config_path', required=False, type=str,
              help='filepath to config file for app', default="")
def main(config_path):
    config = Configuration
    config = config.read_config(config_path)
    print(config.web.ip_address)
   
if __name__ == '__main__':  # pragma: no cover  
    main()

    
