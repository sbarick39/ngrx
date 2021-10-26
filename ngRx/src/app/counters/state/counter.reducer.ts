import { initialState } from "./counter.state";
import { createReducer, on } from "@ngrx/store";
import { changeChanelname, customIncrement, decrement, increment, reset } from "./counter.action";
import { State } from "@ngrx/store";

export const _counterreducer=createReducer(
    initialState,
    on(increment,(state)=>{
        return{
            ...state,
            counter:state.counter+1
        };
    }),
    on(decrement,(state)=>{
        return{
            ...state,
            counter:state.counter-1
        }
    }),
    on(reset,(state)=>{
        return{
            ...state,
            counter:0
        }
    }),
    on(customIncrement,(state,action)=>{
        console.log(action)
        return{
            ...state,
            counter:state.counter+action.count
        }
    }),
    on(changeChanelname,(state)=>{
        return{
            ...state,
            channel:"modified soubhagya channel"
        }
    })
    )

export function createCounter(state: any,action: any){
    return _counterreducer(state,action);
}