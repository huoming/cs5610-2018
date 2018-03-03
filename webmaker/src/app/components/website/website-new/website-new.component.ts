import { Component, OnInit, ViewChild } from '@angular/core';
import {NgForm} from "@angular/forms";
import {WebsiteService} from "../../../services/website.service.client";
import {Router} from "@angular/router";
import {SharedService} from "../../../services/shared.service";

@Component({
  selector: 'app-website-new',
  templateUrl: './website-new.component.html',
  styleUrls: ['./website-new.component.css']
})
export class WebsiteNewComponent implements OnInit {

  @ViewChild('f') signupForm: NgForm;
  website = {
    name : '',
    description : '',
    developerId : ''
  };
  user = {};
  userId: string;
  error = 'Enter the name of the website';
  alert = '* Enter the website name';
  flag = false;

  constructor(private _websiteService: WebsiteService, private router: Router, private sharedService: SharedService) { }

  ngOnInit() {
    this.getUser();
  }

  createWebsite(){

    if(this.website.name == '')
      this.flag = true;
    else {
      this._websiteService.createWebsite(this.userId, this.website)
        .subscribe(
          (data: any) => this.router.navigate(['user/', 'website']),
          (error: any) => console.log(error)
        );
    }
  }

  getUser(){
    //this.user = JSON.parse(localStorage.getItem("user"));
    this.user = this.sharedService.user;
    this.userId = this.user['_id'];
  }

}
