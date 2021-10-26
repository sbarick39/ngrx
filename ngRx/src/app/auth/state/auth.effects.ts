import { error } from "@angular/compiler/src/util";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { of } from "rxjs";
import{catchError, exhaustMap, map, mergeMap, tap} from 'rxjs/operators'
import { User } from "src/app/models/user.model";
import { Authservice } from "src/app/services/auth.services";
import { LoadingSpinner, showErrors } from "src/app/shaired/loading-spinner/state/shared.action";
import { AppState } from "src/app/store/app.state";
import { loginSuccess,loginstart, signupstart, signupSuccess, autologedin, logedOut } from "./auth.action";

@Injectable(
)
export class AuthEffects{
constructor(private actions$:Actions,private authservice:Authservice,private store:Store<AppState>,private router:Router){}
login$=createEffect(()=>{
    return this.actions$.pipe(ofType(loginstart),exhaustMap((action)=>{
return this.authservice.login(action.email,action.password).pipe(map((data)=>{
    this.store.dispatch(LoadingSpinner({status:false}))
    const user=this.authservice.formactUser(data)
    this.authservice.setLocalstorage(user)
    return loginSuccess({user,redirect:true});
}),
catchError(errRes=>{
    console.log(errRes.error.error.message)  
     this.store.dispatch(LoadingSpinner({status:false}))
    const ERRormessages=this.authservice.errormessages(errRes.error.error.message)
    return of(showErrors({message:ERRormessages}))
})
)
    }))
})
redirect=createEffect(()=>{
    return this.actions$.pipe(ofType(loginSuccess),tap((_action)=>{
        this.store.dispatch(showErrors({message:""}))
        if(_action.redirect){
            this.router.navigate(['/'])
        }
  
    }))
},{dispatch:false})

signupredirect=createEffect(()=>{
    return this.actions$.pipe(ofType(signupSuccess),tap((_action)=>{
        this.store.dispatch(showErrors({message:""}))
  this.router.navigate(['/'])
    }))
},{dispatch:false})

signUp=createEffect(()=>{
    return this.actions$.pipe(ofType(signupstart),exhaustMap((action)=>{
        return this.authservice.Register(action.email,action.password).pipe(map((data)=>{
            this.store.dispatch(LoadingSpinner({status:false}))
            const user=this.authservice.formactUser(data);
            this.authservice.setLocalstorage(user)
            return signupSuccess({user,redirect:true})
        }),catchError(errRes=>{
            console.log(errRes.error.error.message)  
             this.store.dispatch(LoadingSpinner({status:false}))
            const ERRormessages=this.authservice.errormessages(errRes.error.error.message)
            return of(showErrors({message:ERRormessages}))
        }))
    }))
});

autologin=createEffect(()=>{
    return this.actions$.pipe(ofType(autologedin),map((action)=>{
        const user=this.authservice.getLocalStorage()
         console.log(user)
    //  return of(loginSuccess({user,redirect:false}))
    })
    )
},{dispatch:false})
logout=createEffect(()=>{
return this.actions$.pipe(ofType(logedOut),map((action)=>{
    this.authservice.logOut();
    this.router.navigate(['/auth'])
}))
},{dispatch:false})
}