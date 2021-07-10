import { Component, OnInit } from '@angular/core';
import { Register } from '../../models/register';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  register: Register = new Register();
  error: any = {};
  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  registerSubmit() {
    console.log(JSON.stringify(this.register));
    this.userService.registerUser(this.register).subscribe(
      (response) => {
        console.log(JSON.stringify(response));
      },
      (error) => {
        console.log(
          'Error Message from register comp:: ' + JSON.stringify(error)
        );
        this.error = error.error;
      }
    );
  }
}
