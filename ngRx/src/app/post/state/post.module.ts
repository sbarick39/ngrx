import {Router, RouterModule, Routes} from '@angular/router'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { PostListComponent } from '../post-list/post-list.component'
import { AddpostComponent } from '../addpost/addpost.component'
import { EditpostComponent } from '../editpost/editpost.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { StoreModule } from '@ngrx/store'
import { postReducer } from './post.reducer'

const route:Routes=[
    {path:"",component:PostListComponent, 
    children:[
        {path:'add',component:AddpostComponent},
        {path:'edit/:id',component:EditpostComponent}
      ]
    }
]

@NgModule({
declarations:[
    PostListComponent,
    AddpostComponent,
    EditpostComponent
],
imports:[CommonModule,FormsModule,ReactiveFormsModule, RouterModule.forChild(route),StoreModule.forFeature('posts',postReducer)],

})

export class PostModule {
    
}