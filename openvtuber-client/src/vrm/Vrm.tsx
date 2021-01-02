import React, { FunctionComponent } from 'react';
import { useFrame } from 'react-three-fiber';
import { updateVrm } from './vrmFunctions';
import { useVrmStore } from '../utils/store';
import type { VRM as pixivVRM } from '@pixiv/three-vrm';

interface VrmProps {
  vrm: pixivVRM;
}

const Vrm: FunctionComponent<VrmProps> = ({ vrm }) => {
  useFrame((_, delta: number) => {
    const vrmState = useVrmStore.getState().vrmState;
    updateVrm(vrm, vrmState, delta);
  });

  return <primitive object={vrm.scene} />;
};

export default Vrm;
