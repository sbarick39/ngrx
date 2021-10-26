import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { addpost } from '../state/post.action';
import { Post } from '../state/post.model';

@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.component.html',
  styleUrls: ['./addpost.component.css']
})
export class AddpostComponent implements OnInit {
  postForm: FormGroup | any
  constructor(private store:Store<AppState>) { }

  ngOnInit(): void {
    this.postForm=new FormGroup({
      title:new FormControl('',[Validators.required,Validators.minLength(6),]),
      description:new FormControl('',[Validators.required,Validators.minLength(6),])
    })
  }

  onAddPost(){
    if(!this.postForm.valid){
      return
    }else{
      // console.log(this.postForm.value)
      const postdata:Post={
        title:this.postForm.value.title,
        description:this.postForm.value.description
      }
      this.store.dispatch(addpost({postdata}))
    }
  }
  showValidationerrors():any{
    const description=this.postForm.get('description')
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
