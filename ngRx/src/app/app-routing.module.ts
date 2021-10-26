import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'',component:HomeComponent,canActivate:[AuthGuard]},
  {path:'counter',loadChildren:()=>import('./counters/counter.module').then((m)=>m.CounterModule),canActivate:[AuthGuard]},

  {
    path:'post',loadChildren:()=>import('./post/state/post.module').then((m)=>m.PostModule),canActivate:[AuthGuard],
},
{path:'auth',loadChildren:()=>import('./auth/auth.module').then((m)=>m.AuthModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
