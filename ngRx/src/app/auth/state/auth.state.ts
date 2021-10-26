import { User } from "src/app/models/user.model";

export interface authState{
user:User |null
}
export const initialState:authState={
user:null
}