import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CoursesComponent } from './components/courses/courses.component';
import { CourseListComponent } from './components/course-list/course-list.component';
import { CourseFormComponent } from './components/course-form/course-form.component';
import { CourseDetailComponent } from './components/course-detail/course-detail.component';
import { LoginComponent } from './components/login/login.component';
import {AuthGuard} from './services/guards/auth.guard';

export const appRoutes : Routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
      },
      {
        path: 'index',
        component: HomeComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'courses',
        component: CoursesComponent,
        canActivate: [AuthGuard],
        children:[
            {
                path: '',
                redirectTo: '/courses/list',
                pathMatch: 'full'
            },
            {
                path:'list',
                component: CourseListComponent
            },
            {
                path:'add',
                component: CourseFormComponent
            },
            {
                path:':id',
                component: CourseDetailComponent
            },
            {
                path:':id/edit',
                component: CourseFormComponent
            }
        ]
      },
      {
        path: '**',
        component: NotFoundComponent
      }
  ]