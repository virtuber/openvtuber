import React, { FunctionComponent, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Vector3 } from 'three';
import { updateVrm } from './VrmFunctions';
import { useVrmStore } from '../utils/store';
import type { VRM as pixivVRM } from '@pixiv/three-vrm';

type VrmProps = {
  vrm: pixivVRM;
};

const Vrm: FunctionComponent<VrmProps> = ({ vrm }: VrmProps) => {
  const [lookAtVec] = useState(() => new Vector3());
  useFrame((_, delta: number) => {
    const vrmState = useVrmStore.getState().vrmState;
    updateVrm(vrm, vrmState, delta, lookAtVec);
  });

  return <primitive object={vrm.scene} />;
};

export default Vrm;
