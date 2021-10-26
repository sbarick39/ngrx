import { createReducer, on } from "@ngrx/store"
import { initialState } from "src/app/post/state/post.state"
import { addpost, Delete, updatepost } from "./post.action"

const _postReducer=createReducer(initialState,
    on(addpost,(state,action)=>{
    let post={...action.postdata};
    post.id=(state.posts.length+1).toString()
    return{
        ...state,
        posts:[...state.posts,post]

    }
}),
on(updatepost,(state,action)=>{
  const updatedPost=state.posts.map((post)=>{
      return action.postdata.id===post.id?action.postdata:post
  })
    return{
        ...state,
        posts:updatedPost
    }
}),
on(Delete,(state,{id})=>{
    const updatedPost=state.posts.filter((post)=>{
        return post.id !==id;
    })
    return{
        ...state,
        posts:updatedPost
    }
})
)


export function postReducer(state:any,action:any){
    return _postReducer(state,action)
}