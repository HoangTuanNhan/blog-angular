import { Component } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog';
  constructor(
    private router: Router
  ){

  }
  onLogout(){
    if(localStorage.getItem('users')) {
      localStorage.removeItem('users');
      this.router.navigate(['/login']);
    }
  }
}
