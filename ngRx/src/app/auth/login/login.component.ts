import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { LoadingSpinner } from 'src/app/shaired/loading-spinner/state/shared.action';
import { AppState } from 'src/app/store/app.state';
import { loginstart } from '../state/auth.action';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup | any

  constructor(private store:Store<AppState>) { }

  ngOnInit(): void {
    this.loginForm=new FormGroup({
      email: new FormControl('',[Validators.required,Validators.email]),
      password: new FormControl('',[Validators.required])
    })
  }
  onSubmit(){
const email=this.loginForm.value.email;
const password=this.loginForm.value.password;
this.store.dispatch(LoadingSpinner({status:true}))
this.store.dispatch(loginstart({email,password}))
  }

}
