import { Injectable } from '@angular/core';
import { User } from '../model/user.model';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  logIn(user: User) {
    const loggedInUser = sessionStorage.getItem('user');
    if(loggedInUser) {
      const user1 = JSON.parse(loggedInUser);
      if(user.userName !== user1.userName) {
        throw 'User not present, create a new one!';
      }
      if(user.userName == user1.userName && user.password === user1.password) {
        sessionStorage.setItem('isLoggedIn', 'true');
        return true;
      } else {
        return false;
      }
    }
    throw 'User not present, create a new one!';
  }

  isLoggedIn() {
    const loggedInUser = sessionStorage.getItem('isLoggedIn');
    return loggedInUser ? true : false;
  }

  createUser(user: User) {
    sessionStorage.setItem('user', JSON.stringify(user));
    sessionStorage.setItem('isLoggedIn', 'true');
    return true;
  }
}
