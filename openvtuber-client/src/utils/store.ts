import {vrmReducer} from '../vrm/VrmReducer'
import {combineReducers} from 'redux';
export const rootReducer = combineReducers({
  vrm : vrmReducer,
})

export type RootState = ReturnType<typeof rootReducer>
