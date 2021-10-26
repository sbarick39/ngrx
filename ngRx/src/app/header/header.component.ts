import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { logedOut } from '../auth/state/auth.action';
import { IsAuth } from '../auth/state/auth.selector';
import { AppState } from '../store/app.state';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isAuthenticated:Observable<boolean> | undefined

  constructor(private store:Store<AppState>) { }

  ngOnInit(): void {
    this.isAuthenticated=this.store.select(IsAuth)
  }
onLogout(event:Event){
event.preventDefault;
this.store.dispatch(logedOut())
}
}
