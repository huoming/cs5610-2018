import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../../../services/user.service.client';
import {User} from '../../../models/user.model.client';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: User;
  constructor(
    private userService: UserService,
    private route: ActivatedRoute) { }

  updateUser(changed_user) {
    this.route.params.subscribe(params => {
      return this.userService.updateUser(changed_user).subscribe(
        (user: User) => {
          this.user = user;
        }
      );
    });
  }

  ngOnInit() {
      this.route.params.subscribe(params => {
         return this.userService.findUserById(params['userId']).subscribe(
           (user: User) => {
             this.user = user;
           }
         );
      });
  }

}
