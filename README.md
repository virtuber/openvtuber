# openvtuber

![client](https://github.com/virtuber/openvtuber/workflows/client/badge.svg)
![docs](https://github.com/virtuber/openvtuber/workflows/docs/badge.svg)
![mobile](https://github.com/virtuber/openvtuber/workflows/mobile/badge.svg)
![server](https://github.com/virtuber/openvtuber/workflows/server/badge.svg)

openvtuber lets you become a VTuber with just a camera on Windows, MacOS and Linux.
We do this with cutting edge computer vision algorithms and a modular architecture.

We currently only support VRM (.vrm) characters.

## Monorepo Structure

* openvtuber
  * docs - documentation website
  * openvtuber-client - web client that renders the VTuber character and the scene
  * openvtuber-mobile-client - streams camera data to the server from your phone
  * openvtuber-server - processes camera data to control a VTuber character
  * proto - holds .proto files for message interchange
  * scripts - various helper 

