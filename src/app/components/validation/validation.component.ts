import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.css']
})
export class ValidationComponent implements OnInit {
  @Input('control') control;
  @Input('name-label') nameControl;
  constructor() { }
   
  get message() {
    for(let err in this.control.errors) {
      if(this.control.dirty) {
        return this.getErrorMessage(err, this.control.errors[err]);
      }
    }
  }

  getErrorMessage(key , value) {
    let messages = {
      'required': `${this.nameControl} Required`,
      'minlength': `${this.nameControl} should be must ${value.requiredLength} character`,
      'maxlength': `${this.nameControl} more than ${value.requiredLength} character`,
      'pattern' : `${this.nameControl} invalid format `
    }
    return messages[key];
  }

  ngOnInit() {

  }

}
