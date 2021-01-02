import type {VrmState} from '../types';
import create, {SetState} from 'zustand';

export type VrmStore = {
  vrmState: VrmState,
  updateVrmState: (vrmState: VrmState) => void
}

const initialVrmState: VrmState = {
  blinkLeftValue: 0,
  blinkRightValue: 0,
  headRotationX: 0,
  headRotationY: 0,
  jawRotationX: 0,
  jawRotationY: 0,
  lookAtX: 0,
  lookAtY: 0,
  lookAtZ: 0,
  neckRotationX: 0,
  neckRotationY: 0
};

export const useVrmStore = create<VrmStore>(
    (set: SetState<VrmStore>) => ({
      vrmState : initialVrmState,
      updateVrmState : (vrmState: VrmState) => set({vrmState}),
    }));
