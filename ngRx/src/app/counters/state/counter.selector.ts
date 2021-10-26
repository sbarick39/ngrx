import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CounterState } from "./counter.state";

const getCounterstate=createFeatureSelector<CounterState>('counter');
export const getCounter=createSelector(getCounterstate,(state)=>{
    return state.counter
});
export const getChannel=createSelector(getCounterstate,(state)=>{
    return state.channel
})