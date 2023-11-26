import { Injectable } from '@angular/core';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  isLogedIn(user: User) {
    const loggedInUser = sessionStorage.getItem(user.userName);
    return loggedInUser ? true : false;
  }

  createUser(user: User) {
    if(this.isLogedIn(user)) {
      throw Error('User already created, please log in');
    } else {
      sessionStorage.setItem(user.userName, user.password);
    }
  }
}
