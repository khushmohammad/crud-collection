import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../service/posts.service';
import { Post } from '../Model/Post';


@Component({
  selector: 'app-postcommentlist',
  templateUrl: './postcommentlist.component.html',
  styleUrls: ['./postcommentlist.component.css']
})
export class PostcommentlistComponent implements OnInit {

  constructor(private postService: PostsService, private route: ActivatedRoute, private fb: FormBuilder) { }

  postId: number = this.route.snapshot.params['id']
  CommentForm = this.fb.group({


    name: ['Antonette', Validators.required],
    email: ['abcd@emai.com', [Validators.required, Validators.email]],
    body: ['dfd', Validators.required],
    postId: [100]


  })

  userList: any

  get CommentFormControl() {
    return this.CommentForm.controls;
  }
  SubmitedData: {} = {}

  submitted = false;



  commentsList: any;

  showCommentFormToggle: boolean = true

  showSuccess: boolean = false
  showCommentForm() {
    this.showCommentFormToggle = !this.showCommentFormToggle
  }


  getComment() {
    this.postService.getCommentByPostId(this.postId).subscribe((cmnt) => {
      this.commentsList = cmnt
      this.commentsList.sort(function (a: any, b: any) { return b.id - a.id })
      // console.log(cmnt);


    })
  }

  CreateComment() {

    this.submitted = true;
    console.log(this.CommentForm.status);

    if (this.CommentForm.status != "INVALID")
      this.postService.createPostComment(this.CommentForm.value as Post, this.postId).subscribe((data) => {


        if (data) {
          this.showSuccess = true
          console.log("success", data);
          this.SubmitedData = data
          this.CommentForm.reset(this.CommentForm.value)


          this.commentsList.push({ name: data.name, email: data.email, body: data.body, postId: Number(this.postId), id: data.id })

         // this.getComment()
          this.commentsList = this.commentsList.sort(function (a: any, b: any) { return b.id - a.id })
          console.log(this.commentsList); 



        }

      })


  }
  ngOnInit(): void {

    //  console.log(this.route);

    this.getComment()


    this.postService.getuser().subscribe((user) => {
      //   console.log(user);
      this.userList = user

    })
  }

}
