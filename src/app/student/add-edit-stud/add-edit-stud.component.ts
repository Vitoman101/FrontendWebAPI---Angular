import { Component, OnInit, Input } from '@angular/core';
import {DataService} from 'src/app/data.service'

@Component({
  selector: 'app-add-edit-stud',
  templateUrl: './add-edit-stud.component.html',
  styleUrls: ['./add-edit-stud.component.css']
})
export class AddEditStudComponent implements OnInit {

  constructor(private service:DataService) { }

  @Input() stud:any;
  id:string;
  firstName:string;
  lastName:string;
  address:string;

  ngOnInit(): void {
    this.id = this.stud.id;
    this.firstName = this.stud.firstName;
    this.lastName = this.stud.lastName;
    this.address = this.stud.address;
  }

  addStudent(){
    var val = {id:this.id,
                firstName:this.firstName,
                lastName:this.lastName,
                address:this.address}

    this.service.addStudent(val).subscribe(res => {
      alert('Done.');
    });
  }

  updateStudent(){
    var val = {id:this.id,
                firstName:this.firstName,
                lastName:this.lastName,
                address:this.address}
                   
    this.service.updateStudent(val).subscribe(res => {
      alert('Done.');
    });
  }

}
