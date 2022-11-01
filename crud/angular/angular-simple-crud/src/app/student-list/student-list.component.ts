import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { StudentService } from '../service/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentLIstComponent implements OnInit {

  constructor(private stdList: StudentService) { }
  Std: any = [{ id: 1, name: "abc" }]

  ngOnInit(): void {

    this.stdList.getStudentList().subscribe((std) => {
      this.Std = std
    })


  }

}
