import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PostsService } from '../service/posts.service';


@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.css']
})
export class PostlistComponent implements OnInit {

  constructor(private postService: PostsService, private http: HttpClient) { }
  PostList: any = []
  PostListWithName: any = []

  UserList: any = []




  ngOnInit(): void {


    this.postService.getposts().subscribe((posts) => {
      console.log(posts);

      this.PostList = posts;
      this.PostList.sort(function (a: any, b: any) { return b.id - a.id })
      this.postService.getuser().subscribe((user) => {
        this.UserList = user
        this.PostList.forEach((element: any) => {
          this.UserList.filter((data: any) => {
            if (data.id == element.userId) {
              element.username = data.username
            }
          })
        });
      })
    })



    this.postService.getuser().subscribe((user) => {

      this.UserList = user
      //console.log(user);

    })
    console.log(this.PostList, "dd");


  }

}
