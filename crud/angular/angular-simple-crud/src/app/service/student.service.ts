import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }

  getStudentList() {
    //this.http.get('https://jsonplaceholder.typicode.com/users')
    return this.http.get('https://jsonplaceholder.typicode.com/users')
  }


}
