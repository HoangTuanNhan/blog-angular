import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CoursesComponent } from './components/courses/courses.component';
import { CourseListComponent } from './components/course-list/course-list.component';
import { CourseFormComponent } from './components/course-form/course-form.component';

export const appRoutes : Routes = [
    {
        path: '',
        redirectTo: '/index',
        pathMatch: 'full'
      },
      {
        path: 'index',
        component: HomeComponent
      },
      {
        path: 'courses',
        component: CoursesComponent,
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