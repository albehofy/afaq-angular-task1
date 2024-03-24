// login.component.ts

import { Component } from '@angular/core';
import { LoginService } from '../../Services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email: string = '';
  password: string = '';

  constructor(private loginService: LoginService) {}

  login(): void {
    this.loginService.login(this.email, this.password)
      .subscribe({
        next: response => {
          // Handle successful login response
          console.log('Login successful:', response);
        },
        error: error => {
          // Handle login error
          console.error('Login failed:', error);
        }
      });
  }
}
