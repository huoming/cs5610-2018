import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import {UserService} from '../../../services/user.service.client';
import {User} from '../../../models/user.model.client';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: String;
  password: String;
  hello: String = 'hello from components!';

  constructor(private userService: UserService, private router: Router) {}

  login(username: String, password: String) {
    //alert('username: ' + username);
      this.userService.findUserByCredentials(username, this.password)
        .subscribe((user: User) => {
        if (user) {
          this.router.navigate(['/profile', user._id ]);
        }
      });
  }

  ngOnInit(){

  }

}
