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
  getSingleUser(individual_id:any)
  {
    return fetch('https://fakestoreapi.com/users/'+individual_id);
  }
  
}
