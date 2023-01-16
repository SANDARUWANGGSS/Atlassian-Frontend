import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserServicesService } from '../user-services.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit 
{
  username:any;
  password:any;
  isLogin=false;

  ngOnInit() { }

  constructor(private service: UserServicesService,private router: Router){  }

  Login(username:any,password:any) {
    return this.service.userLogin(username,password).subscribe((response: any) => {
      // console.log(response);
       this.isLogin=true;
       sessionStorage.setItem('Token',response.token)
       sessionStorage.setItem('isLogin','true')
      // console.log(sessionStorage.getItem('Token'))
      // console.log(sessionStorage.getItem('isLogin'))
       this.router.navigate(['users'])
     },error=>{
       console.log(error)
     });      
    
   }
}

