import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  constructor(private http: HttpClient, private route: ActivatedRoute) { }
  Std: any
  ngOnInit(): void {

    this.http.get(`https://jsonplaceholder.typicode.com/users/${this.route.snapshot.params['id']}`).subscribe((data) => {
      console.log(data);
      this.Std = data

    })
  }

}
