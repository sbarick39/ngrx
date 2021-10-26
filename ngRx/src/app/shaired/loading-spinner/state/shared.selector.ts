import { createFeatureSelector, createSelector } from "@ngrx/store"
import { SharedState } from "./shaired.state"

export const Shared_state_name='shared'
const getShairedstate=createFeatureSelector<SharedState>(Shared_state_name);

export const getLoading=createSelector(getShairedstate,state=>{
    return state.showLoading
})
export const getErrormessage=createSelector(getShairedstate,state=>{
    return state.showError
})
