import { Injectable } from '@angular/core';
import {  CanActivate, Router } from '@angular/router';
import { Authservice } from './services/auth.services';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private _authservice:Authservice,private router:Router){}
  canActivate():boolean{
    if(this._authservice.loggedin()){
      return true
    }else{
      this.router.navigate(['/auth'])
      return false
    }
  }
  
}
