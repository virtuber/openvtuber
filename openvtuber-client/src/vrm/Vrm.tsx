import React, { FunctionComponent } from 'react';
import { useFrame } from 'react-three-fiber';
import { updateVrm } from './VrmFunctions';
import { useVrmStore } from '../utils/store';
import type { VRM as pixivVRM } from '@pixiv/three-vrm';

type VrmProps = {
  vrm: pixivVRM;
};

const Vrm: FunctionComponent<VrmProps> = ({ vrm }: VrmProps) => {
  useFrame((_, delta: number) => {
    const vrmState = useVrmStore.getState().vrmState;
    updateVrm(vrm, vrmState, delta);
  });

  return <primitive object={vrm.scene} />;
};

export default Vrm;
