import {UPDATE_VRM_STATE, VrmActionTypes, VrmState} from './types'

export const updateVrmState = (vrmState: VrmState): VrmActionTypes => {
  return { type: UPDATE_VRM_STATE, payload: vrmState }
}
