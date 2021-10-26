import { createAction, props } from "@ngrx/store";
import { Post } from "./post.model";

export const addpost=createAction("Addpostaction",props<{postdata:Post}>());
export const updatepost=createAction("Updatepost",props<{postdata:Post}>());
export const Delete=createAction("delete",props<{id:any}>())


