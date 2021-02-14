import type { VrmState } from '../types';
import create, { SetState } from 'zustand';

export type VrmStore = {
  vrmState: VrmState;
  updateVrmState: (vrmState: VrmState) => void;
};

const initialVrmState: VrmState = {
  aValue: 0,
  angryValue: 0,
  blinkLeftValue: 0,
  blinkRightValue: 0,
  eValue: 0,
  funValue: 0,
  headRotationX: 0,
  headRotationY: 0,
  headRotationZ: 0,
  iValue: 0,
  jawRotationX: 0,
  jawRotationY: 0,
  joyValue: 0,
  lookAtX: 0,
  lookAtY: 0,
  lookAtZ: 0,
  neckRotationX: 0,
  neckRotationY: 0,
  neutralValue: 0,
  oValue: 0,
  sorrowValue: 0,
  upperChestX: 0,
  upperChestY: 0,
  upperChestZ: 0,
  uValue: 0,
};

export const useVrmStore = create<VrmStore>((set: SetState<VrmStore>) => ({
  vrmState: initialVrmState,
  updateVrmState: (vrmState: VrmState) => set({ vrmState }),
}));
