import React, { FunctionComponent } from 'react';
import { useFrame } from 'react-three-fiber';
import { Vector3 } from 'three';
import type { VRM as pixivVRM } from '@pixiv/three-vrm';

type VrmProps = {
  vrm: pixivVRM | null;
};

const Vrm: FunctionComponent<VrmProps> = ({ vrm }) => {
  useFrame(({ clock, mouse }, delta) => {
    if (vrm) {
      vrm.scene.rotation.y = Math.PI * Math.sin(clock.getElapsedTime());
      if (vrm.lookAt) vrm.lookAt.lookAt(new Vector3(mouse.x, mouse.y, 0));
      vrm.update(delta);
    }
  });

  return vrm && <primitive object={vrm.scene} />;
};

export default Vrm;
