#!/usr/bin/node

const fs = require('fs');
const path = require('path');
const { build } = require('moduloze');

const srcPath = path.resolve(__dirname, '../src/protobufs/VrmStateMessage.js');
const moduleContents = fs.readFileSync(srcPath, { encoding: 'utf-8' });

const config = {
  buildESM: true,
  ignoreUnknownDependency: true,
};

const depMap = {
  'protobufjs/minimal': '$protobuf',
};

const { esm } = build(config, srcPath, moduleContents, depMap);

// console.log(esm.code);
fs.writeFileSync(srcPath, esm.code);
