/**
 * Created by sesha on 6/2/17.
 */

import {Injectable} from '@angular/core';
import {Http, RequestOptions, Response} from '@angular/http';
import 'rxjs/Rx';
import {environment} from '../../environments/environment';
import {Router} from '@angular/router';
import {SharedService} from './shared.service';
// injecting service into module
@Injectable()

export class UserService {

  constructor(private _http: Http, private router: Router, private sharedService: SharedService) {}

  baseUrl = environment.baseUrl;

  options = new RequestOptions();

  loggedIn() {
    this.options.withCredentials = true;
    return this._http.post(this.baseUrl + '/api/loggedIn', '', this.options)
      .map(
        (res: Response) => {
          const user = res.json();
          if (user !== '0') {
            this.sharedService.user = user; // setting user as global variable using shared service
            return true;
          } else {
            this.router.navigate(['/login']);
            return false;
          }
        }
      );
  }

  logout() {
    this.options.withCredentials = true;
    return this._http.post(this.baseUrl + '/api/logout', '', this.options)
      .map(
        (res: Response) => {
          const data = res;
        }
      );
  }

  findUserById(userId: String) {
    return this._http.get(this.baseUrl + '/api/user/' + userId)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }

  register(username: String, password: String) {

    this.options.withCredentials = true;
    const body = {
      username : username,
      password : password
    };

    return this._http.post(this.baseUrl + '/api/register', body, this.options)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }

  login(username: String, password: String) {

    this.options.withCredentials = true;

    const body = {
      username : username,
      password : password
    };
    return this._http.post(this.baseUrl + '/api/login', body, this.options)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }

  updateUser(user: any) {
    return this._http.put(this.baseUrl + '/api/user/' + user._id, user)
      .map(
        (res: Response) => {
          return 'Updated';
        }
      );

  }

}
