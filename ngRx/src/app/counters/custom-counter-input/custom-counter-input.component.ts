import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { changeChanelname, customIncrement } from '../state/counter.action';
import { getChannel, getCounter } from '../state/counter.selector';
import { CounterState } from '../state/counter.state';

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.css']
})
export class CustomCounterInputComponent implements OnInit {

  constructor(private store:Store<AppState>) { }
 value=''
 chanelName=""
  ngOnInit(): void {
   
  this.store.select(getChannel).subscribe((data)=>{
  this.chanelName=data;
  console.log(this.chanelName)
  })
  }
  addCounter(){
    console.log(this.value)
    this.store.dispatch(customIncrement({count:+this.value}))
  }
  changeChanel(){
    this.store.dispatch(changeChanelname())
  }
}
