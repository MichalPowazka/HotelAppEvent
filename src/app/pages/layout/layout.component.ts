import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

  loggedUserData : any;
  constructor(private router : Router) {
    const token = localStorage.getItem('hotelUser');
    if(token !=null){
      this.loggedUserData = jwtDecode(token);
    }
  }

  onLogOff() {
    localStorage.removeItem('hotelUser');
    this.loggedUserData = undefined;
    this.router.navigateByUrl('/login')
  }
}
