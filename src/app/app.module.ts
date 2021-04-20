import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { AddEditStudComponent } from './student/add-edit-stud/add-edit-stud.component';
import { ShowStudComponent } from './student/show-stud/show-stud.component';
import { TeacherComponent } from './teacher/teacher.component';
import { ShowTeachComponent } from './teacher/show-teach/show-teach.component';
import { AddEditTeachComponent } from './teacher/add-edit-teach/add-edit-teach.component';
import { CourseComponent } from './course/course.component';
import { ShowCourComponent } from './course/show-cour/show-cour.component';
import { AddEditCourComponent } from './course/add-edit-cour/add-edit-cour.component';
import { StudentcourseComponent } from './studentcourse/studentcourse.component';
import { ShowStudcourComponent } from './studentcourse/show-studcour/show-studcour.component';
import { AddEditStudcourComponent } from './studentcourse/add-edit-studcour/add-edit-studcour.component';
import { DataService } from './data.service';


import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@Angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    AddEditStudComponent,
    ShowStudComponent,
    TeacherComponent,
    ShowTeachComponent,
    AddEditTeachComponent,
    CourseComponent,
    ShowCourComponent,
    AddEditCourComponent,
    StudentcourseComponent,
    ShowStudcourComponent,
    AddEditStudcourComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
