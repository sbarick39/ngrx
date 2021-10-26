import { createAction, props } from "@ngrx/store";

export const LoadingSpinner=createAction("Loading", props<{status:boolean}>())
export const showErrors=createAction("error",props<{message:string}>())