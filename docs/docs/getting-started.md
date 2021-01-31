---
id: getting-started
title: Getting Started
sidebar_label: Getting Started
slug: /
---

```bash
# Install and build web client
cd openvtuber-client
yarn install
yarn build

# Install server dependencies
cd ../openvtuber-server
pip install -r requirements.txt --user

# Build Cython files
python setup.py build_ext --inplace

# Run server
cd src
python -m openvtuber.lib
```
