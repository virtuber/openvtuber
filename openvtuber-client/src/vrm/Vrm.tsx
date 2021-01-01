import React, { FunctionComponent } from 'react';
import { useFrame } from 'react-three-fiber';
import { useSelector } from 'react-redux';
import { updateVrm } from './VrmState';
import type { VRM as pixivVRM } from '@pixiv/three-vrm';
import type { RootState } from '../types';

type VrmProps = {
  vrm: pixivVRM | null;
};

const Vrm: FunctionComponent<VrmProps> = ({ vrm }) => {
  const vrmState = useSelector((state: RootState) => state.vrmState);
  useFrame((_, delta: number) => {
    if (vrm) updateVrm(vrm, vrmState, delta);
  });

  return vrm && <primitive object={vrm.scene} />;
};

export default Vrm;
