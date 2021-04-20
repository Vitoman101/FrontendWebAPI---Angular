import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs'

import {  throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  readonly APIurl = "https://localhost:44327/api";

  constructor(private httpClient: HttpClient) { }

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  //STUDENTS
  //get list of students
  getStudentList():Observable<any[]>{
    return this.httpClient.get<any>(this.APIurl + '/students');
  }

  //post or add student
  addStudent(val:any){
    return this.httpClient.post(this.APIurl + '/students', val);
  }

    //update student
  updateStudent(val:any){
    var num = val.id.toString();
    return this.httpClient.put(this.APIurl + '/students/' + num, val);
  }

  //delete student
  deleteStudent(val:any){
    return this.httpClient.delete(this.APIurl + '/students/' + val);
  }

  //get student details
  getDetailsStudent(val:any){
    return this.httpClient.get(this.APIurl + '/students/GetStudentDetails/' + val);
  }

  //TEACHERS
  //get list of teachers
  getTeacherList():Observable<any[]>{
    return this.httpClient.get<any>(this.APIurl + '/teachers');
  }

  //post or add teacher
  addTeacher(val:any){
    return this.httpClient.post(this.APIurl + '/teachers', val);
  }

    //update teacher
  updateTeacher(val:any){
    var num = val.id.toString();
    return this.httpClient.put(this.APIurl + '/teachers/' + num, val);
  }

  //delete teacher
  deleteTeacher(val:any){
    return this.httpClient.delete(this.APIurl + '/teachers/' + val);
  }

  //get teacher details
  getDetailsTeacher(val:any){
    return this.httpClient.get(this.APIurl + '/teachers/GetTeacherDetails/' + val);
  }

  //COURSE
  //get list of courses
  getCoursesList():Observable<any[]>{
    return this.httpClient.get<any>(this.APIurl + '/courses');
  }

  //post or add course
  addCourse(val:any){
    return this.httpClient.post(this.APIurl + '/courses', val);
  }

    //update course
  updateCourse(val:any){
    var num = val.id.toString();
    return this.httpClient.put(this.APIurl + '/courses/' + num, val);
  }

  //delete course
  deleteCourse(val:any){
    return this.httpClient.delete(this.APIurl + '/courses/' + val);
  }

  //get course details
  getDetailsCourse(val:any){
    return this.httpClient.get(this.APIurl + '/courses/GetCourseDetails/' + val);
  }

  //STUDENT-COURSE
  //get list of student courses
  getStudentCoursesList():Observable<any[]>{
    return this.httpClient.get<any>(this.APIurl + '/studentcourses');
  }

  //post or add course
  addStudentCourse(val:any){
    return this.httpClient.post(this.APIurl + '/studentcourses', val);
  }

    //update course
  updateStudentCourse(val:any){
    var num = val.id.toString();
    return this.httpClient.put(this.APIurl + '/studentcourses/' + num, val);
  }

  //delete course
  deleteStudentCourse(val:any){
    return this.httpClient.delete(this.APIurl + '/studentcourses/' + val);
  }
}