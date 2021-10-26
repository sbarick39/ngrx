import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { autologedin } from './auth/state/auth.action';
import { getErrormessage, getLoading } from './shaired/loading-spinner/state/shared.selector';
import { AppState } from './store/app.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ngRx';
showLoading:Observable<boolean>|undefined;
errorMessage:Observable<string>|undefined
constructor(private store:Store<AppState>){

}
ngOnInit(){
  this.showLoading=this.store.select(getLoading)
  this.errorMessage=this.store.select(getErrormessage);
  this.store.dispatch(autologedin())
}
}
