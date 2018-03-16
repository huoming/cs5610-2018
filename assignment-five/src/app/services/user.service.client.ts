import { User } from '../models/user.model.client';
import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class UserService {

    constructor(private http: Http) {}

  /*findUserByCredential(username, password){
    return this.users.find( function (user){
       return user.username === username && user.password === password;
    });
  }
*/

  login(username, password) {
      return this.http.get('http://localhost:3100/api/user?username=' + username + '&password=' + password)
        .map((response: Response) => {
          return response.json();
      });
  }

    findUserById(userId) {
      return this.http.get('http://localhost:3100/api/user/' + userId)
        .map((response: Response) => {
          return response.json();
        });
    }

    updateUser(user) {
      return user;
    }
}
