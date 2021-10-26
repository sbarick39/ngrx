import { Post } from "./post.model";

export interface PostState{
posts:Post[]
};
export const initialState:PostState={
    posts:[
        {id:'1',title:"sample Title1" ,description:"sample description1"},
        {id:'2',title:"sample Title2" ,description:"sample description2"}
    ],
}