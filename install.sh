#!/bin/bash

(cd openvtuber-server && python setup.py install --user)
pip install -r ./openvtuber-server/requirements.txt
npm install --prefix ./openvtuber-client
