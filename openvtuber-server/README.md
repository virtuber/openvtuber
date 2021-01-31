# openvtuber server

This directory encapsulates openvtuber's server that processes camera data and transforms it into character controlling data.


## Getting Started

```bash
pip install -r requirements.txt

# Build Cython files
python setup.py build_ext --inplace

# Run server
cd src
python -m openvtuber.lib
```
