import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Todo } from '../models/todo';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  public API : string="http://localhost:3000/courses";
  constructor(
    private http: HttpClient
  ) { }

  getAllCourses() : Observable<any>{
    return this.http.get(this.API);
  }

  addCourese(course: Todo) : Observable<any>{
    return this.http.post(this.API, course);
  }

  deteleCourse(id: number) : Observable<any> {
     return this.http.delete(`${this.API}/`+id);
  }

  getCourse(id): Observable<any> {
      return this.http.get(`${this.API}/`+id);
  }

  editCourse(course: Todo) {
    return this.http.put(`${this.API}/${course.id}`, course);
  }

  handleError(error) {
    if(error.error instanceof Error) {
      console.log(`Client side error: ${error.error.masssge}`);
    } else {
      console.log(`Server side error: ${error.status} - ${JSON.stringify(error.error)}`);
    }
  }
}
