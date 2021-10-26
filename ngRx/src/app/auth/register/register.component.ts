import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { LoadingSpinner } from 'src/app/shaired/loading-spinner/state/shared.action';
import { AppState } from 'src/app/store/app.state';
import { signupstart } from '../state/auth.action';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private store:Store<AppState>) { }
RegisterForm:FormGroup | any
  ngOnInit(): void {
    this.RegisterForm=new FormGroup({
      email: new FormControl('',[Validators.required,Validators.email]),
      password: new FormControl('',[Validators.required])
    })
  }
  signupSubmit(){
    const email=this.RegisterForm.value.email;
    const password=this.RegisterForm.value.password;
    this.store.dispatch(LoadingSpinner({status:true}))
    this.store.dispatch(signupstart({email,password}))
  }

}
