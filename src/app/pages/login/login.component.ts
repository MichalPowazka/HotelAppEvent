import { Component } from '@angular/core';
import { RoomService } from '../../service/room.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginObj: any = {
    "email":"",
    "password":""
  };

  constructor(private roomSrv:RoomService, private router: Router){

  }

  onLogin(){
    this.roomSrv.login(this.loginObj).subscribe((res:any)=>{
      console.log(res);
      if(res.isSuccess) {
          localStorage.setItem('hotelUser',JSON.stringify(res.token))
          this.router.navigateByUrl('/dashboard')
      } else {
        alert('Check User Credentials')
      }
    },
    error=>{

    })
  }
}
