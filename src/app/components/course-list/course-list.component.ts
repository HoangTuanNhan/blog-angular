import { Component, OnInit, OnDestroy } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../models/todo';
import { Subscription } from 'rxjs'
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit, OnDestroy {
  public courses: Todo[] = [] ;
  public course: Todo;
  public sub: Subscription;
  public error: number = 0;
  //fiter course
  public id : number;
  public name: string;
  public decription: string;
  public fee: number;

  constructor(
    private todoService: TodoService,
    private router: Router,
  ) { }

  ngOnInit() {

    this.sub = this.todoService.getAllCourses().subscribe( data => {
      this.courses = data;
    });
  }
 
  onDeleteCourse(id: number) {
    this.todoService.deteleCourse(id).subscribe(data => { 
      for(let i = 0 ; i< this.courses.length; i++) {
        if(this.courses[i].id == id) {
          this.error = 1;
          this.courses.splice(i,1);
          break;
        } else {
          this.error = 0;
        }
      }
    }, error => {
      this.todoService.handleError(error);
    });
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}
