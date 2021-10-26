import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store/app.state';
import { Delete } from '../state/post.action';
import { Post } from '../state/post.model';
import { getPost } from '../state/post.selector';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
post:Observable<Post[]> | any
  constructor(private store:Store<AppState>) { }

  ngOnInit(): void {
 this.post=this.store.select(getPost)
  }
  delete(id:string){
    if(confirm("are you want to delete this item")){
     console.log(id)
    }
  
  }
  
}
