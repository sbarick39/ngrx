import { Action, createReducer } from "@ngrx/store"
import { on } from "@ngrx/store"
import { initialState, SharedState } from "../state/shaired.state"
import { LoadingSpinner, showErrors } from "./shared.action"

export const sharedReducer=createReducer(initialState, on(LoadingSpinner,(state,action)=>{
    return{
        ...state,
        showLoading:action.status
    }
   
}),on(showErrors,(state,action)=>{
    return{
        ...state,
        showError:action.message
    }
})
)

export function SharedReducer(state:any,action:any){
    return sharedReducer(state,action)
}