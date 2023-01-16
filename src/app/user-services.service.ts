import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {
  HttpEvent,
  HttpParams,
  HttpResponse,
} from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServicesService {

  login(username: any, password: any) {
    throw new Error('Method not implemented.');
  }

  constructor(private http:HttpClient ) { }

  // Get all users API calling started
  getUserDetails()
  {
    return fetch('https://fakestoreapi.com/users');
  }
  // Get all users API calling ended


  // Get single user details API calling started
  getSingleUser(individual_id:any)
  {
    return fetch('https://fakestoreapi.com/users/'+individual_id);
  }
  // Get single user details API calling ended

  // User login API calling started
  public userLogin(username: any, password: any):Observable<any> {
    // console.log(username)
    return this.http.post<any>('https://fakestoreapi.com/auth/login',{  
        username: username,
        password: password
  
    });

  }
  // User login API calling ended

}
