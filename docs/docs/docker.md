---
id: docker
title: Running in Docker
---

To run the Docker version that runs the binary, perform these commands:

```bash
cd openvtuber-client
yarn install
yarn run build
cd ../openvtuber-server

docker build -t openvtuber-server .
docker run --rm --device=/dev/video0:/dev/video0 --network host openvtuber-server
```

You will need to replace /dev/video0 if your camera is a different device.
