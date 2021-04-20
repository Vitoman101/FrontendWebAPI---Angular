import { Component, OnInit } from '@angular/core';

import {DataService} from 'src/app/data.service'

@Component({
  selector: 'app-show-studcour',
  templateUrl: './show-studcour.component.html',
  styleUrls: ['./show-studcour.component.css']
})
export class ShowStudcourComponent implements OnInit {

  constructor(private service:DataService) { }

  StudcourList:any=[];

  ModalTitle:string;
  ActivateAddEditStudcourComp:boolean = false;
  studcour:any;

  ngOnInit(): void {
    this.refreshStudentCoursesList();
  }

  editClick(item){
    this.studcour = item;
    this.ModalTitle = 'Edit Enrollment';
    this.ActivateAddEditStudcourComp = true;
  }

  deleteClick(item){
    if(confirm('Are you sure?')){
      this.service.deleteStudentCourse(item.id).subscribe(data => {
        alert('Done.')
        this.refreshStudentCoursesList();
      },
      error => {
        alert('Student enrollment not deleted, there was a problem.');
      }
      )
    }
  }

  addClick(){
    this.studcour = {
      id : 0,
      idStudent : '',
      idTeacher : ''
    }
    this.ModalTitle = 'Add Enrollment';
    this.ActivateAddEditStudcourComp = true;
  }

  closeClick(){
    this.ActivateAddEditStudcourComp = false;
    this.refreshStudentCoursesList();
  }

  refreshStudentCoursesList(){
    this.service.getStudentCoursesList().subscribe(data => {
      this.StudcourList = data;
    });
  }
}
