import type {VrmState} from './types'
import VrmStateMessage from '../protobufs/VrmStateMessage';
import {VrmActionTypes, UPDATE_VRM_STATE} from './types'

const initialState: VrmState = VrmStateMessage.VrmStateMessage.fromObject({
  blinkLeftValue : 0,
  blinkRightValue : 0,
  headRotationX : 0,
  headRotationY : 0,
  jawRotationX : 0,
  jawRotationY : 0,
  lookAtX : 0,
  lookAtY : 0,
  lookAtZ : 0,
  neckRotationX : 0,
  neckRotationY : 0
});

export const vrmReducer =
    (state = initialState, action: VrmActionTypes): VrmState => {
      switch (action.type) {
      case UPDATE_VRM_STATE: {
        return action.payload;
      }
      default:
        return state
      }
    }
