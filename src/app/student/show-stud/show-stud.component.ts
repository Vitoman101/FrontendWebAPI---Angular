import { Component, OnInit } from '@angular/core';
import {DataService} from 'src/app/data.service';
@Component({
  selector: 'app-show-stud',
  templateUrl: './show-stud.component.html',
  styleUrls: ['./show-stud.component.css']
})
export class ShowStudComponent implements OnInit {

  constructor(private service:DataService) { }

  StudentsList:any=[];

  ModalTitle:string;
  ActivateAddEditStudComp:boolean = false;
  stud:any;

  ngOnInit(): void {
    this.refreshStudList();
  }

  editClick(item){
    this.stud = item;
    this.ModalTitle = 'Edit Student';
    this.ActivateAddEditStudComp = true;
  }

  deleteClick(item){
    if(confirm('Are you sure?')){
      this.service.deleteStudent(item.id).subscribe(data => {
        alert('Done.')
        this.refreshStudList();
      },
      error => {
        alert('Student not deleted, please remove him from attending courses');
      }
      )
    }
  }

  addClick(){
    this.stud = {
      id : 0,
      firstName : '',
      lastName : '',
      address : ''
    }
    this.ModalTitle = 'Add Student';
    this.ActivateAddEditStudComp = true;
  }

  closeClick(){
    this.ActivateAddEditStudComp = false;
    this.refreshStudList();
  }

  refreshStudList(){
    this.service.getStudentList().subscribe(data => {
      this.StudentsList = data;
    });
  }
}
