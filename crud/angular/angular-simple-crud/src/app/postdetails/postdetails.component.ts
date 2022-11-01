import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../service/posts.service';


@Component({
  selector: 'app-postdetails',
  templateUrl: './postdetails.component.html',
  styleUrls: ['./postdetails.component.css']
})
export class PostdetailsComponent implements OnInit {

  constructor(private postService: PostsService, private route: ActivatedRoute) { }
  postDetails: any
  id: number = this.route.snapshot.params['id']

  UserList: any = []
  ngOnInit(): void {
    this.postService.getpostsdetails(this.id).subscribe((postdetail) => {
      this.postDetails = postdetail

      this.postService.getuser().subscribe((user) => {
        this.UserList = user
        
          this.UserList.filter((data: any) => {
            if (data.id == this.postDetails.userId) {
              this.postDetails.username = data.username
            }
          })
        
      })

    })
  }

}
