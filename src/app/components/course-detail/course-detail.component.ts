import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../models/todo';
import { Subscription } from 'rxjs'
import { Router,ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {
  public detailCourse: Todo;
  public title = "Detail Course"
  constructor(
    private todoService: TodoService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private location: Location
  ) { }
  public subDetail: Subscription;
  ngOnInit() {
    this.detailCourse = new Todo();
    this.onDetail();
  }

  onDetail() {
    this.activatedRoute.params.subscribe(course => {
      this.subDetail = this.todoService.getCourse(course.id).subscribe(data => {
        this.detailCourse = data;
        console.log(this.detailCourse);
      }, error => {
        this.todoService.handleError(error);
      });
    });
  }

  onBack() {
    this.location.back();
  }

}
