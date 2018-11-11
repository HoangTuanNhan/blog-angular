import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(courses: any[], id?: number, name?: string, decription?: string, fee?: number): any {
    if(!id && !name && !decription && !fee) {
      return courses;
    } else {
      if (id) {
        courses = courses.filter(x => {
           return x.id.toString().indexOf(id) != -1
        });
      }
      if(name) {
        courses = courses.filter(x => {
          return x.name.toLowerCase().indexOf(name.toLowerCase()) != -1;
        })
      }
      if(decription) {
        courses = courses.filter(x => {
          return x.decription.toLowerCase().indexOf(decription.toLowerCase()) != -1;
        })
      }
      if (fee) {
        courses = courses.filter(x => {
           return x.fee.toString().indexOf(fee) != -1
        });
      }
    }
    return courses;
  }

}
