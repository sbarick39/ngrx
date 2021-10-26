import { state } from "@angular/animations"
import { createReducer } from "@ngrx/store"
import { on } from "@ngrx/store"
import { logedOut, loginSuccess, signupSuccess } from "./auth.action"
import { initialState } from "./auth.state"

const _authReducer=createReducer(initialState,on(loginSuccess,(state,action)=>{
    console.log(action.user)
    return{
        ...state,
       user:action.user
    }
}),on(signupSuccess,(state,action)=>{
    console.log(action.user)
    return{
        ...state,
       user:action.user
    }
}),
on(logedOut,(state,action)=>{
    return{
        ...state,
       user:null
    }
}))
export function AuthReducer(state:any,action:any){
return _authReducer(state,action)
}
