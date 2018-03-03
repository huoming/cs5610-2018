import { Component, OnInit } from '@angular/core';
import 'rxjs/Rx';
import {UserService} from "../../../services/user.service.client";
import {Router} from "@angular/router";
import {SharedService} from "../../../services/shared.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  //properties
  username : String;
  firstName : String;
  lastName : String;
  email : String;
  user = {};
  userId : String;
  errorFlag : boolean;
  errorMsg = 'Invalid username or password !';


  constructor(private _UserService: UserService, private router: Router, private sharedService: SharedService) { }

  ngOnInit() {

    this.getUser();

  }

  logout() {
    this._UserService.logout()
      .subscribe(
        (data: any) => this.router.navigate(['/login'])
      );
  }

  getUser() {
    this.user = this.sharedService.user;
    this.username = this.user['username'];
    this.firstName = this.user['firstName'];
    this.lastName = this.user['lastName'];
    this.email = this.user['email'];
    this.userId = this.user['_id'];
  }


  updateUser() {
    let updatedUser = {
      _id : this.user['_id'],
      username : this.username,
      firstName :this.firstName,
      lastName :  this.lastName,
      email : this.email

    };


    this._UserService.updateUser(updatedUser)
      .subscribe(
      (data: any) => {
        this._UserService.findUserById(updatedUser._id)
          .subscribe(
            (data: any) => {
              localStorage.setItem('user', JSON.stringify(data));
              this.ngOnInit();
            }
          )
      },
      (error: any) => this.errorFlag = true
    );
      // .toPromise()
      // .then( data => {
      //   this._UserService.findUserById(updatedUser._id)
      //     .toPromise()
      //     .then( data => {
      //       localStorage.setItem('user', JSON.stringify(data));
      //
      //       this.ngOnInit();
      //     })
      // })
  }

}
