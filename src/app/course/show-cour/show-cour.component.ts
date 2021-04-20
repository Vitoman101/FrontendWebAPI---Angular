import { Component, OnInit } from '@angular/core';
import {DataService} from 'src/app/data.service';

@Component({
  selector: 'app-show-cour',
  templateUrl: './show-cour.component.html',
  styleUrls: ['./show-cour.component.css']
})
export class ShowCourComponent implements OnInit {

  constructor(private service:DataService) { }

  CoursesList:any=[];

  ModalTitle:string;
  ActivateAddEditCourComp:boolean = false;
  cour:any;

  ngOnInit(): void {
    this.refreshCoursesList();
  }

  editClick(item){
    this.cour = item;
    this.ModalTitle = 'Edit Course';
    this.ActivateAddEditCourComp = true;
  }

  deleteClick(item){
    if(confirm('Are you sure?')){
      this.service.deleteCourse(item.id).subscribe(data => {
        alert('Done.')
        this.refreshCoursesList();
      },
      error => {
        alert('Course not deleted, there was a problem.');
      }
      )
    }
  }

  addClick(){
    this.cour = {
      id : 0,
      name : '',
      subject : '',
      idTeacher : ''
    }
    this.ModalTitle = 'Add Course';
    this.ActivateAddEditCourComp = true;
  }

  closeClick(){
    this.ActivateAddEditCourComp = false;
    this.refreshCoursesList();
  }

  refreshCoursesList(){
    this.service.getCoursesList().subscribe(data => {
      this.CoursesList = data;
    });
  }
}
