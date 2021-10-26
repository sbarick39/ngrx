import { PostState } from "./post.state";
import { createFeatureSelector, createSelector, Store } from "@ngrx/store";
const getPostState=createFeatureSelector<PostState>('posts')
export const getPost=createSelector(getPostState,(state)=>{
    return state.posts
})
export const getpostById=createSelector(getPostState,(state:any,props:any)=>{
   return state.posts.find((post: { id: any; })=>post.id === props.id)
})