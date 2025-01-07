import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  dummyUserName: string = 'admin';
  dummyPassword: string = 'admin';
  loginError: string = '';
  loginForm: FormGroup;
  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = new FormGroup({
      userName: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  LogIn() {
    const isFormValid = this.loginForm.valid;
    let userName = this.loginForm.controls['userName'].value;
    let password = this.loginForm.controls['password'].value;
    if (isFormValid) {
      if (userName == this.dummyUserName && password === this.dummyPassword) {
        const logindata = {
          username: userName,
          password: password,
        };
        if (typeof window !== 'undefined' && window.localStorage) {
          localStorage.setItem('careTraceLoginData', JSON.stringify(logindata));
        }
        this.loginError = '';
        this.router.navigate(['/my-dashboard']);
      } else {
        this.loginError = 'Invalid Username or Password';
      }
    }
  }
}
