import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../service/user.service';
import { User } from '../../model/user.model';

@Component({
  selector: 'app-sign-up',
  standalone: true,  
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  signupForm!: FormGroup;

  constructor(private userservice: UserService, 
    private formBuilder: FormBuilder, 
    private router: Router) {

  }

  ngOnInit(): void {
      this.signupForm = this.formBuilder.group({
        newUsername: ['', Validators.required],
        newPassword: ['', Validators.required],
        confirmPassword: ['', Validators.required]
    });
  }

  onSignUpClick() {
    if (this.signupForm.valid) {
        const username = this.signupForm.get('newUsername')?.value;
        const password = this.signupForm.get('newPassword')?.value;
        const user: User = {
          userName: username,
          password: password
        };
        try {
          const createUserStatus = this.userservice.createUser(user);
          if(createUserStatus) {
            this.router.navigateByUrl("/profile");
          }
        } catch(error) {
          alert('user already present');
        }
        
    }
  }
}
