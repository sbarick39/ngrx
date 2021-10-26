import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/store/app.state';
import { addpost, updatepost } from '../state/post.action';
import { Post } from '../state/post.model';
import { getpostById } from '../state/post.selector';

@Component({
  selector: 'app-editpost',
  templateUrl: './editpost.component.html',
  styleUrls: ['./editpost.component.css']
})
export class EditpostComponent implements OnInit ,OnDestroy {
post:Post | any;
editPost:FormGroup |any
postSubscription:Subscription |any
  constructor(private route:ActivatedRoute,private store:Store<AppState>) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params=>{
     const id=params.get('id')
    this.postSubscription= this.store.select(getpostById,{id}).subscribe(data=>{
       this.post=data;
       console.log(this.post)
     })
    })
    this.editPostForm()
  }
  editPostForm(){
    this.editPost=new FormGroup(
      {
        title:new FormControl(this.post.title,[Validators.required,Validators.minLength(6)]),
        description:new FormControl(this.post.description,[Validators.required,Validators.minLength(6)])
      }
    )
  }
  onSubmit(){
    if(!this.editPost.valid){
      
      return
      
    }else{
      const title=this.editPost.value.title;
      const description=this.editPost.value.description
      const postdata:Post={
        id:this.post.id,
        title,
        description
      }
      this.store.dispatch(updatepost({postdata}));
      
    }
  }
ngOnDestroy(){
  if(this.postSubscription){
    this.postSubscription.unsubscribe()
  }
}
showValidationerrors():any{
  const description=this.editPost.get('description')
  if(description.touched && !description.valid){
   if(description.errors.required){
     return 'Description is required'
   }
  }
  if(description.errors.minlength){
 return "description must be 6 charecter"
  }
}
}
