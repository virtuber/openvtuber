import React, { FunctionComponent } from 'react';
import { useFrame } from 'react-three-fiber';
import { useSelector } from 'react-redux';
import { updateVrm } from './vrmFunctions';
import type { VRM as pixivVRM } from '@pixiv/three-vrm';
import type { RootState } from '../types';

type VrmProps = {
  vrm: pixivVRM | null;
};

const Vrm: FunctionComponent<VrmProps> = ({ vrm }) => {
  useFrame((_, delta: number) => {
    const vrmState = useSelector((state: RootState) => state.vrmState);
    if (vrm) updateVrm(vrm, vrmState, delta);
  });

  return vrm && <primitive object={vrm.scene} />;
};

export default Vrm;
