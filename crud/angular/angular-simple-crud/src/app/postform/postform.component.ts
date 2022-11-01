import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PostsService } from '../service/posts.service';
import { Post } from '../Model/Post';


@Component({
  selector: 'app-postform',
  templateUrl: './postform.component.html',
  styleUrls: ['./postform.component.css']
})
export class PostformComponent implements OnInit {

  constructor(private fb: FormBuilder, private postsService: PostsService) { }

  postForm = this.fb.group({

    userId: [1, Validators.required],
    title: ['', Validators.required],
    body: ['', Validators.required]

  })
  submitted = false;
  showSuccess = false;
  userList: any

  get postFormControl() {
    return this.postForm.controls;
  }
  SubmitedData: {} = {}

  CreatePost() {

    this.submitted = true;
    if (this.postForm.status != "INVALID")
      this.postsService.createPost(this.postForm.value).subscribe((data) => {
        if (data) {
          this.showSuccess = true
          console.log("success", data);
          this.SubmitedData = data
          this.postForm.reset(this.postForm.value)
        }

      })




  }
  ngOnInit(): void {

    this.postsService.getuser().subscribe((user) => {
      console.log(user);
      this.userList = user

    })
  }



}
