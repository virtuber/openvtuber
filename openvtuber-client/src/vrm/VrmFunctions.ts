import { VRMSchema } from '@pixiv/three-vrm';
import { Vector3 } from 'three';

import type { VRM } from '@pixiv/three-vrm';
import type { VrmState } from '../types';

/** Updates VRM with new state.
 */
export const updateVrm = (vrm: VRM, state: VrmState, delta: number): void => {
  if (vrm.humanoid) {
    const chest = vrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.Chest);
    const upperChest = vrm.humanoid.getBoneNode(
      VRMSchema.HumanoidBoneName.UpperChest,
    );
    const leftShoulder = vrm.humanoid.getBoneNode(
      VRMSchema.HumanoidBoneName.LeftShoulder,
    );
    const rightShoulder = vrm.humanoid.getBoneNode(
      VRMSchema.HumanoidBoneName.RightShoulder,
    );
    const neck = vrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.Neck);
    const head = vrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.Head);
    const jaw = vrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.Jaw);
    if (head) {
      head.rotation.x = state.headRotationX;
      head.rotation.y = state.headRotationY;
      head.rotation.z = state.headRotationZ;
    }

    if (jaw) {
      jaw.rotation.x = state.jawRotationX;
      jaw.rotation.y = state.jawRotationY;
    }
    if (neck) {
      neck.rotation.x = state.neckRotationX;
      neck.rotation.y = state.neckRotationY;
    }

    if (leftShoulder) {
      leftShoulder.rotation.y = 0; //Math.PI / 3;
      leftShoulder.rotation.x = 0; //Math.PI / 2;
      leftShoulder.rotation.z = 0; //Math.PI;
    }
    if (rightShoulder) {
      rightShoulder.rotation.y = 0; //-Math.PI / 3;
      rightShoulder.rotation.x = 0; // Math.PI / 2;
      rightShoulder.rotation.z = 0; // -Math.PI / 5;
    }

    if (chest) {
      chest.rotation.x = 0;
      chest.rotation.y = 0;
    }
    if (upperChest) {
      upperChest.rotation.x = state.upperChestX;
      upperChest.rotation.y = state.upperChestY;
      upperChest.rotation.z = state.upperChestZ;
    }
  }
  if (vrm.blendShapeProxy) {
    vrm.blendShapeProxy.setValue('blink_l', state.blinkLeftValue);
    vrm.blendShapeProxy.setValue('blink_r', state.blinkRightValue);

    vrm.blendShapeProxy.setValue('a', state.aValue);
    vrm.blendShapeProxy.setValue('e', state.eValue);
    vrm.blendShapeProxy.setValue('i', state.iValue);
    vrm.blendShapeProxy.setValue('o', state.oValue);
    vrm.blendShapeProxy.setValue('u', state.uValue);

    vrm.blendShapeProxy.setValue('angry', state.angryValue);
    vrm.blendShapeProxy.setValue('fun', state.funValue);
    vrm.blendShapeProxy.setValue('joy', state.joyValue);
    vrm.blendShapeProxy.setValue('neutral', state.neutralValue);
    vrm.blendShapeProxy.setValue('sorrow', state.sorrowValue);
  }
  if (vrm.lookAt) {
    vrm.lookAt.lookAt(new Vector3(state.lookAtX, state.lookAtY, state.lookAtZ));
  }
  vrm.update(delta);
};
