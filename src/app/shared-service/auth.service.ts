import { Injectable } from '@angular/core';
import { UserService } from '../service/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    constructor(private userService: UserService) {

    }
    isAuthenticated() {
        const data = this.userService.isLoggedIn();
        if(data) {
            return true;
        } else {
            return false;
        }
    }
}
