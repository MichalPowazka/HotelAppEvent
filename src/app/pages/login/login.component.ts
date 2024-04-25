import { Component } from '@angular/core';
import { RoomService } from '../../service/room.service';
import { Router } from '@angular/router';
import { AccountService } from '../../core/api/services';

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

  constructor(private roomSrv:RoomService, private accountService : AccountService, private router: Router){

  }

  onLogin(){

      const req = {
        body :{
        email : this.loginObj.email,
        password: this.loginObj.password
      }
    }
  

    this.accountService.accountLoginPost$Json(req).subscribe((res:any)=>{
      console.log(res);
      if(res.isSuccess) {
          localStorage.setItem('hotelUser',res.token)
          this.router.navigateByUrl('/dashboard')
      } else {
        alert('Check User Credentials')
      }
    })
  }
}
