import { Vector3 } from 'three';
import THREEVRM from '@pixiv/three-vrm';
import type { VRM } from '@pixiv/three-vrm';
import type { VrmState } from '../types';

/**
 * Updates VRM with new state.
 */
export const updateVrm = (vrm: VRM, state: VrmState, delta: number): void => {
  if (vrm.humanoid) {
    const chest = vrm.humanoid.getBoneNode(
      THREEVRM.VRMSchema.HumanoidBoneName.Chest,
    );
    const upperChest = vrm.humanoid.getBoneNode(
      THREEVRM.VRMSchema.HumanoidBoneName.UpperChest,
    );
    const leftShoulder = vrm.humanoid.getBoneNode(
      THREEVRM.VRMSchema.HumanoidBoneName.LeftShoulder,
    );
    const rightShoulder = vrm.humanoid.getBoneNode(
      THREEVRM.VRMSchema.HumanoidBoneName.RightShoulder,
    );
    const neck = vrm.humanoid.getBoneNode(
      THREEVRM.VRMSchema.HumanoidBoneName.Neck,
    );
    const jaw = vrm.humanoid.getBoneNode(
      THREEVRM.VRMSchema.HumanoidBoneName.Jaw,
    );
    const head = vrm.humanoid.getBoneNode(
      THREEVRM.VRMSchema.HumanoidBoneName.Head,
    );
    if (
      chest &&
      upperChest &&
      leftShoulder &&
      rightShoulder &&
      neck &&
      head
    ) {
      head.rotation.x = state.headRotationX;
      head.rotation.y = state.headRotationY;

      neck.rotation.x = state.neckRotationX;
      neck.rotation.y = state.neckRotationY;

      leftShoulder.rotation.y = Math.PI / 3;
      leftShoulder.rotation.x = Math.PI / 2;
      rightShoulder.rotation.y = -Math.PI / 3;
      rightShoulder.rotation.x = Math.PI / 2;

      chest.rotation.y = 0;
      upperChest.rotation.y = 0;
    }
  }
  if (vrm.blendShapeProxy) {
    vrm.blendShapeProxy.setValue('blink_l', state.blinkLeftValue);
    vrm.blendShapeProxy.setValue('blink_r', state.blinkRightValue);
    vrm.blendShapeProxy.setValue('fun', 0.5);
  }
  if (vrm.lookAt)
    vrm.lookAt.lookAt(new Vector3(state.lookAtX, state.lookAtY, state.lookAtZ));
  vrm.update(delta);
};
