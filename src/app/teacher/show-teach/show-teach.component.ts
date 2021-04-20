import { Component, OnInit } from '@angular/core';
import {DataService} from 'src/app/data.service'

@Component({
  selector: 'app-show-teach',
  templateUrl: './show-teach.component.html',
  styleUrls: ['./show-teach.component.css']
})
export class ShowTeachComponent implements OnInit {

  constructor(private service:DataService) { }

  TeachersList:any=[];

  ModalTitle:string;
  ActivateAddEditTeachComp:boolean = false;
  teach:any;

  ngOnInit(): void {
    this.refreshTeacherList();
  }

  editClick(item){
    this.teach = item;
    this.ModalTitle = 'Edit Teacher';
    this.ActivateAddEditTeachComp = true;
  }

  deleteClick(item){
    if(confirm('Are you sure?')){
      this.service.deleteTeacher(item.id).subscribe(data => {
        alert('Done.')
        this.refreshTeacherList();
      },
      error => {
        alert('Teacher not deleted, please remove him from attending courses');
      }
      )
    }
  }

  addClick(){
    this.teach = {
      id : 0,
      firstName : '',
      lastName : '',
      address : ''
    }
    this.ModalTitle = 'Add Teacher';
    this.ActivateAddEditTeachComp = true;
  }

  closeClick(){
    this.ActivateAddEditTeachComp = false;
    this.refreshTeacherList();
  }

  refreshTeacherList(){
    this.service.getTeacherList().subscribe(data => {
      this.TeachersList = data;
    });
  }
}
