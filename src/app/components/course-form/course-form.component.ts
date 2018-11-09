import { Component, OnInit, OnDestroy } from '@angular/core';
import { Location } from '@angular/common' ;
import { Todo } from '../../models/todo';
import { TodoService } from '../../services/todo.service';
import { Subscription } from 'rxjs'
import { Router, ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent implements OnInit, OnDestroy {
  public course: Todo;
  public subscription: Subscription;
  public subscriptionAdd: Subscription;
  public subscriptionParam: Subscription;
  public subscriptionEdit: Subscription;
  public nameButton:string;
  constructor(
    private location: Location,
    private todoService: TodoService,
    private router: Router,
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit() {
    this.course = new Todo();
    this.loadData();
  }

  loadData() {
    this.subscriptionParam = this.activatedRoute.params.subscribe(data => {
      if(data && data.id) {
        this.nameButton = 'Edit Couses';
        this.subscriptionAdd = this.todoService.getCourse(data.id).subscribe(data => {
          this.course = data;
       });
      } else {
        this.nameButton = 'Save Couses';
      }
    });
  }

  onBack(){
    this.location.back();
  }
  
  onSubmitForm() {
    this.subscriptionParam = this.activatedRoute.params.subscribe(data => {
      if(data && data.id) {
        this.subscriptionEdit = this.todoService.editCourse(this.course).subscribe(newData=> {
          this.router.navigate(['/courses/list']);
        }, error => {
          this.todoService.handleError(error);
        });
      } else {
        this.subscription = this.todoService.addCourese(this.course).subscribe( data => {
          if(data && data.id) {
            this.router.navigate(['/courses/list']);
          }
        });
      }
    });
    
  }
  ngOnDestroy() {
      if(this.subscription) {
        this.subscription.unsubscribe();
      }
      if(this.subscriptionParam) {
        this.subscriptionParam.unsubscribe();
      }
      if(this.subscriptionAdd) {
        this.subscriptionAdd.unsubscribe();
      }
  }
}

