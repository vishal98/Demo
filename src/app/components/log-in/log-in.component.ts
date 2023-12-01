import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { UserService } from '../../service/user.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from '../../model/user.model';

@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  providers: [UserService],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css'
})
export class LogInComponent implements OnInit{
  
  loginForm!: FormGroup;

  constructor(private userservice: UserService, 
    private formBuilder: FormBuilder, 
    private router: Router) {

  }

  ngOnInit(): void {
      this.loginForm = this.formBuilder.group({
        username: ['', Validators.required],
        password: ['', Validators.required]
    });
  }

  onLogInClick() {
    if (this.loginForm.valid) {
        const username = this.loginForm.get('username')?.value;
        const password = this.loginForm.get('password')?.value;
        console.log('Username:', username);
        console.log('Password:', password);

        const user: User = {
          userName: username,
          password: password
        };
        try {
          const isLoggedIn = this.userservice.logIn(user);
          if(isLoggedIn) {
            this.router.navigateByUrl("/profile")
          } else {
            alert('Wrong Credential');
          }
        } catch(error) {
          alert(error);
        }
    }
  }

}
