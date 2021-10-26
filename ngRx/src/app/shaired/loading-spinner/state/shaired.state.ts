

export interface SharedState{
    showLoading:boolean,
    showError:string
}

export const initialState:SharedState = {
    showLoading:false,
    showError:''
}