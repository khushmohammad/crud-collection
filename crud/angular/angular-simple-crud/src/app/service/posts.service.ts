import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../Model/Post';


@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  getposts() {

    return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }
  getpostswithusername() {




    return this.http.get('https://jsonplaceholder.typicode.com/posts')






    //return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }
  getpostsdetails(id: number) {

    return this.http.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
  }
  getCommentByPostId(postId: number) {

    return this.http.get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
  }
  getuser() {

    return this.http.get(`https://jsonplaceholder.typicode.com/users`)
  }
  createPost(body: any) {

    return this.http.post(`https://jsonplaceholder.typicode.com/posts`, body)
  }
  createPostComment(body: Post, postId: number) {

    return this.http.post<Post>(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`, body)
  }
}
