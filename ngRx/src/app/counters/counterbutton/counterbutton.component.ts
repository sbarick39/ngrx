import { Component, Input, OnInit, Output ,EventEmitter} from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { decrement, increment, reset } from '../state/counter.action';
import { CounterState } from '../state/counter.state';

@Component({
  selector: 'app-counterbutton',
  templateUrl: './counterbutton.component.html',
  styleUrls: ['./counterbutton.component.css']
})
export class CounterbuttonComponent implements OnInit {
  
  constructor(private store:Store<AppState>) { }

  ngOnInit(): void {
  }
  
Onincrement(){
 this.store.dispatch(increment())
  }
Ondecrement(){
  this.store.dispatch(decrement())
}
Onreset(){
 this.store.dispatch(reset())
}
}
