import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServicesService } from '../user-services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  
  constructor(private service: UserServicesService, private Router: Router) 
  { }

  ngOnInit(): void {

    // Check login started
    if(sessionStorage.getItem("isLogin") != "true")
    {
      this.Router.navigate(['']);
    }
    else
    {
      this.Router.navigate(['home']);
    }
    // Check login ended
  }

}
