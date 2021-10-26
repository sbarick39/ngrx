import {RouterModule, Routes} from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterbuttonComponent } from './counterbutton/counterbutton.component';
import { CounterComponent } from './counter/counter.component';
import { CounteroutputComponent } from './counteroutput/counteroutput.component';
import { CustomCounterInputComponent } from './custom-counter-input/custom-counter-input.component';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { _counterreducer } from './state/counter.reducer';

const route:Routes=[
    {
        path:'',
        component:CounterComponent
    }
];
@NgModule({
    declarations:[
        CounterbuttonComponent,
        CounterComponent,
        CounteroutputComponent,
        CustomCounterInputComponent,
    ],
imports:[CommonModule,FormsModule, RouterModule.forChild(route),StoreModule.forFeature('counter',_counterreducer)]
})
export class CounterModule{
    
}