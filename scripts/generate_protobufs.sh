#!/bin/bash
PROJECT_ROOT=$(realpath "$(dirname $0)/..")
PBJS_PATH="$PROJECT_ROOT/openvtuber-client/node_modules/protobufjs/bin"
CJS_TO_ESM_PATH="$PROJECT_ROOT/openvtuber-client/scripts"
JS_OUT_DIR="$PROJECT_ROOT/openvtuber-client/src/protobufs"
PY_OUT_DIR="$PROJECT_ROOT/openvtuber-server/src/openvtuber/protobufs"
PROTO_PATH="$PROJECT_ROOT/proto"

protoc \
        --python_out=${PY_OUT_DIR} \
        --proto_path=${PROTO_PATH} \
        VrmState.proto

${PBJS_PATH}/pbjs ${PROTO_PATH}/VrmState.proto -t static-module -w commonjs -o ${JS_OUT_DIR}/VrmStateMessage.js
${PBJS_PATH}/pbts ${JS_OUT_DIR}/VrmStateMessage.js -o ${JS_OUT_DIR}/VrmStateMessage.d.ts

${CJS_TO_ESM_PATH}/cjs-to-esm.js
