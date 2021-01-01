export interface VrmState {
  /** This property is a value between 0 (closed) and 1 (open) for left blink */
  blinkLeftValue: number;
  /**
   * This property is a value between 0 (closed) and 1 (open) for right blink
   */
  blinkRightValue: number;
  headRotationX: number;
  headRotationY: number;
  jawRotationX: number;
  jawRotationY: number;
  lookAtX: number;
  lookAtY: number;
  lookAtZ: number;
  neckRotationX: number;
  neckRotationY: number;
}

export interface RootState {vrmState: VrmState}
