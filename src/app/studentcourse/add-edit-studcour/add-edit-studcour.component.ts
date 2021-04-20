import { Component, OnInit, Input } from '@angular/core';
import {DataService} from 'src/app/data.service'

@Component({
  selector: 'app-add-edit-studcour',
  templateUrl: './add-edit-studcour.component.html',
  styleUrls: ['./add-edit-studcour.component.css']
})
export class AddEditStudcourComponent implements OnInit {

  constructor(private service:DataService) { }

  courseList:any = [];
  studentList:any = [];

  @Input() studcour:any;
  id:string;
  idStudent:any;
  idCourse:any;

  ngOnInit(): void {
    this.id = this.studcour.id;
    this.idStudent = this.studcour.idStudent;
    this.idCourse = this.studcour.idCourses;
    this.getCoursesList();
    this.getStudentList();
  }

  getCoursesList() {
    this.service.getCoursesList().subscribe(data => {
      this.courseList = data;
    });
  }
  getStudentList() {
    this.service.getStudentList().subscribe(data => {
      this.studentList = data;
    });
  }

  addStudentCourse(){
    var val = {id:this.id,
                idStudent:this.idStudent.id,
                idCourse:this.idCourse.id}
      console.log(val);
    this.service.addStudentCourse(val).subscribe(res => {
      alert('Done.');
    });
  }

  updateStudentCourse(){
    var val = {id:this.id,
                idStudent:this.idStudent.id,
                idCourse:this.idCourse.id}
                   
    this.service.updateStudentCourse(val).subscribe(res => {
      alert('Done.');
    });
  }
}