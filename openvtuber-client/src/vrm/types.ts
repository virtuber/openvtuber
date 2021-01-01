import type {VrmStateMessage} from '../protobufs/VrmStateMessage';
export type VrmState = VrmStateMessage;
export const UPDATE_VRM_STATE = "UPDATE_VRM_STATE";

interface UpdateVrmAction {
  type: typeof UPDATE_VRM_STATE
  payload: VrmState
}

export type VrmActionTypes = UpdateVrmAction
