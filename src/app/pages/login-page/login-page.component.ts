import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {

  responseClass = ''
  responseText = ''

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  onSubmitHandler(formData: any) {
    this.authService.login(formData).subscribe(
      (response: any) => {
        this.responseText = 'login success';
        this.responseClass = 'alert-success'
        localStorage.setItem('token', response.token);
        localStorage.setItem('user', JSON.stringify(response.user));
        this.router.navigateByUrl('home')
      },
      (error) => {
        this.responseText = "login failed, try again"
        this.responseClass = 'alert-danger'
        console.log('login failed, please try again');
      }
    );
  }
}
