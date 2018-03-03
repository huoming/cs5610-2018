/**
 * Created by mayankrd on 8/9/17.
 */
import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {UserService} from './user.service.client';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private userService: UserService, private router: Router) {}

  canActivate() {
    return this.userService.loggedIn();
  }
}
