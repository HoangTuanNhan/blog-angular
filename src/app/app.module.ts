import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TodoService } from './services/todo.service';
import { appRoutes } from './app.router';
import { CoursesComponent } from './components/courses/courses.component';
import { CourseListComponent } from './components/course-list/course-list.component';
import { CourseFormComponent } from './components/course-form/course-form.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CourseDetailComponent } from './components/course-detail/course-detail.component';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ValidationComponent } from './components/validation/validation.component';
import {AuthGuard} from './services/guards/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseListComponent,
    CourseFormComponent,
    HeaderComponent,
    HomeComponent,
    NotFoundComponent,
    CourseDetailComponent,
    LoginComponent,
    ValidationComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    TodoService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
