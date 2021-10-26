import {Router, RouterModule, Routes} from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { AUTH_STATE_NAME } from './state/auth.selector';
import { AuthReducer } from './state/auth.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './state/auth.effects';

let routes:Routes=[
    {path:'',children:[
        {path:'',redirectTo:'login'},
        {path:'login',component:LoginComponent},
        {path:"register",component:RegisterComponent}
    ]}
]
@NgModule({
declarations:[
    LoginComponent,
    RegisterComponent
  ],
imports:[CommonModule, 
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    // StoreModule.forFeature(AUTH_STATE_NAME,AuthReducer),
     EffectsModule.forFeature()
],
})

export class AuthModule{

}