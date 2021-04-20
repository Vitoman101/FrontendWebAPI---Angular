import { Component, OnInit, Input } from '@angular/core';
import {DataService} from 'src/app/data.service';

@Component({
  selector: 'app-add-edit-cour',
  templateUrl: './add-edit-cour.component.html',
  styleUrls: ['./add-edit-cour.component.css']
})
export class AddEditCourComponent implements OnInit {

  constructor(private service:DataService) { }

  teacherList:any = [];

  @Input() cour:any;
  id:string;
  name:string;
  subject:string;
  idTeacher:any;

  ngOnInit(): void {
    this.id = this.cour.id;
    this.name = this.cour.name;
    this.subject = this.cour.subject;
    this.idTeacher = this.cour.idTeacher;
    this.getTeacherList();
  }

  getTeacherList() {
    this.service.getTeacherList().subscribe(data => {
      this.teacherList = data;
    });
  }

  addCourse(){
    var val = {id:this.id,
                name:this.name,
                subject:this.subject,
                idTeacher:this.idTeacher.id}

    this.service.addCourse(val).subscribe(res => {
      alert('Done.');
    });
  }

  updateCourse(){
    var val = {id:this.id,
                name:this.name,
                subject:this.subject,
                idTeacher:this.idTeacher.id}
                   
    this.service.updateCourse(val).subscribe(res => {
      alert('Done.');
    });
  }
}