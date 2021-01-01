import { vrmReducer } from './vrm/reducers'

const rootReducer = combineReducers({
  vrmState: vrmReducer,
})

export type RootState = ReturnType<typeof rootReducer>
