import React, { FunctionComponent } from 'react';
import { useFrame } from 'react-three-fiber';
import { Vector3 } from 'three';
import THREEVRM from '@pixiv/three-vrm';
import type { VRM as pixivVRM } from '@pixiv/three-vrm';

type VrmProps = {
  vrm: pixivVRM | null;
};

const Vrm: FunctionComponent<VrmProps> = ({ vrm }) => {
  useFrame(({ clock, mouse }, delta) => {
    if (vrm) {
      if (vrm.humanoid) {
        const chest = vrm.humanoid.getBoneNode(
          THREEVRM.VRMSchema.HumanoidBoneName.Chest,
        );
        if (chest)
          chest.rotation.y = (Math.PI * Math.sin(clock.getElapsedTime())) / 8;
        const upperChest = vrm.humanoid.getBoneNode(
          THREEVRM.VRMSchema.HumanoidBoneName.UpperChest,
        );
        if (upperChest)
          upperChest.rotation.y =
            (Math.PI * Math.sin(clock.getElapsedTime())) / 8;
        const leftShoulder = vrm.humanoid.getBoneNode(
          THREEVRM.VRMSchema.HumanoidBoneName.LeftShoulder,
        );
        if (leftShoulder) {
          leftShoulder.rotation.y = Math.PI / 3;
          leftShoulder.rotation.x = Math.PI / 2;
        }
        const rightShoulder = vrm.humanoid.getBoneNode(
          THREEVRM.VRMSchema.HumanoidBoneName.RightShoulder,
        );
        if (rightShoulder) {
          rightShoulder.rotation.y = -Math.PI / 3;
          rightShoulder.rotation.x = Math.PI / 2;
        }
        const neck = vrm.humanoid.getBoneNode(
          THREEVRM.VRMSchema.HumanoidBoneName.Neck,
        );
        if (neck) {
          neck.rotation.y = (Math.PI * Math.sin(clock.getElapsedTime())) / 8;
          neck.rotation.x = (Math.PI * Math.sin(clock.getElapsedTime())) / 8;
        }
        const jaw = vrm.humanoid.getBoneNode(
          THREEVRM.VRMSchema.HumanoidBoneName.Jaw,
        );
        if (jaw) {
          jaw.rotation.y = Math.PI * Math.sin(clock.getElapsedTime());
          jaw.rotation.x = Math.PI * Math.sin(clock.getElapsedTime());
        }
        if (vrm.blendShapeProxy) {
          const blinkValue = (Math.sin(clock.getElapsedTime() * 8) + 1) / 2;

          vrm.blendShapeProxy.setValue('blink', blinkValue);
          vrm.blendShapeProxy.setValue('fun', 0.5);
        }
      }

      //vrm.scene.rotation.y = Math.PI * Math.sin(clock.getElapsedTime());
      if (vrm.lookAt) vrm.lookAt.lookAt(new Vector3(mouse.x, mouse.y, 0));
      vrm.update(delta);
    }
  });

  return vrm && <primitive object={vrm.scene} />;
};

export default Vrm;
