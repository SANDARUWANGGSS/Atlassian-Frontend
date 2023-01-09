import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServicesService {

  constructor() { }

  getUserDetails()
  {
    return fetch('https://fakestoreapi.com/users');
  }
  getSingleUser()
  {
    return fetch('https://fakestoreapi.com/users/1');
  }
  
}
