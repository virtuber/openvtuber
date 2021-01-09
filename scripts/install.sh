#!/bin/bash

PROJECT_ROOT=$(realpath "$(dirname $0)/..")
pip3 install -r "$PROJECT_ROOT/openvtuber-server/requirements.txt"
cd $PROJECT_ROOT/openvtuber-client
yarn install
yarn build
cd $PROJECT_ROOT/openvtuber-server
python3 setup.py install --user
