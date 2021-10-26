import { OnDestroy, Output } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/store/app.state';
import { getCounter } from '../state/counter.selector';
import { CounterState } from '../state/counter.state';

@Component({
  selector: 'app-counteroutput',
  templateUrl: './counteroutput.component.html',
  styleUrls: ['./counteroutput.component.css']
})
export class CounteroutputComponent implements OnInit,OnDestroy {
   public counter:any;
   CounterSubscription!: Subscription;
  constructor(private store:Store<AppState>){ }

  ngOnInit(): void {
    this.CounterSubscription=this.store.select(getCounter).subscribe((data:any)=>{
      this.counter=data
    })
  }
  ngOnDestroy(){
    this.CounterSubscription.unsubscribe()
  }
}