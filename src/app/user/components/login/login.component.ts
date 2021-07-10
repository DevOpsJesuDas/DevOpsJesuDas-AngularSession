import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../../models/login';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  // login: Login = new Login();
  login: any = {};
  error: any = {};
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {}

  loginSubmit() {
    console.log(JSON.stringify(this.login));
    this.userService.loginUser(this.login).subscribe(
      (response) => {
        console.log(JSON.stringify(response));
        localStorage.setItem('token', response.token);
        this.router.navigate(['/dashboard/']);
      },
      (error) => {
        console.log(JSON.stringify(error));
        this.error = error.error;
      }
    );
  }
}
