import { Component, OnInit, Input } from '@angular/core';
import {DataService} from 'src/app/data.service';

@Component({
  selector: 'app-add-edit-teach',
  templateUrl: './add-edit-teach.component.html',
  styleUrls: ['./add-edit-teach.component.css']
})
export class AddEditTeachComponent implements OnInit {

  constructor(private service:DataService) { }

  @Input() teach:any;
  id:string;
  firstName:string;
  lastName:string;
  email:string;

  ngOnInit(): void {
    this.id = this.teach.id;
    this.firstName = this.teach.firstName;
    this.lastName = this.teach.lastName;
    this.email = this.teach.email;
  }

  addTeacher(){
    var val = {id:this.id,
                firstName:this.firstName,
                lastName:this.lastName,
                email:this.email}

    this.service.addTeacher(val).subscribe(res => {
      alert('Done.');
    });
  }

  updateTeacher(){
    var val = {id:this.id,
                firstName:this.firstName,
                lastName:this.lastName,
                email:this.email}
                   
    this.service.updateTeacher(val).subscribe(res => {
      alert('Done.');
    });
  }

}