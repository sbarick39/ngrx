import { _counterreducer } from "../counters/state/counter.reducer";
import { Shared_state_name } from "../shaired/loading-spinner/state/shared.selector";
import { SharedReducer, sharedReducer } from "../shaired/loading-spinner/state/shared.reducer";
import { SharedState } from "../shaired/loading-spinner/state/shaired.state";
import { AUTH_STATE_NAME } from "../auth/state/auth.selector";
import { authState } from "../auth/state/auth.state";
import { AuthReducer } from "../auth/state/auth.reducer";
export interface AppState{
   [Shared_state_name]:SharedState;
   [AUTH_STATE_NAME]:authState
}
export const appReducer={
  [Shared_state_name]:SharedReducer,
  [AUTH_STATE_NAME]:AuthReducer
}
