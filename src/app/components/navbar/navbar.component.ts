import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { UserService } from '../../service/user.service';
import { User } from '../../model/user.model';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  providers: [UserService],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{

  isLoggedIn = false;
  // loggedInUser: User ;
  constructor(private userService: UserService, private router: Router) {
    
  }

  ngOnInit(): void {
      this.isLoggedIn = this.userService.isLoggedIn();
      if(this.isLoggedIn)  {
        JSON.parse(sessionStorage.getItem('user')!);
      }
  }

  onSignOutClick() {
    // sessionStorage.setItem('isLoggedIn', 'false');
    sessionStorage.clear();
    this.router.navigateByUrl("/");
  }

}
