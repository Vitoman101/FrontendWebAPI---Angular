import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { from } from 'rxjs';

import {StudentComponent} from './student/student.component';
import {TeacherComponent} from './teacher/teacher.component';
import {CourseComponent} from './course/course.component';
import {StudentcourseComponent} from './studentcourse/studentcourse.component';


const routes: Routes = [
  {path: 'student', component: StudentComponent},
  {path: 'teacher', component: TeacherComponent},
  {path: 'course', component: CourseComponent},
  {path: 'studentcourse', component: StudentcourseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
