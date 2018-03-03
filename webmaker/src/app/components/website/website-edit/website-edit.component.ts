import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {WebsiteService} from "../../../services/website.service.client";
import {SharedService} from "../../../services/shared.service";

@Component({
  selector: 'app-website-edit',
  templateUrl: './website-edit.component.html',
  styleUrls: ['./website-edit.component.css']
})

export class WebsiteEditComponent implements OnInit {

  user = {};
  userId : String;
  error : string;
  flag = false;
  alert : string;
  websiteId: string;
  websiteName: string;
  websiteDesc: string;
  website = { id : {},
    name: "",
    description : "",
    _user: {},
    dateCreated: {},
    pages: [],
    __v: 0};
  websites = [{}];

  constructor(private activatedRoute: ActivatedRoute, private _websiteService: WebsiteService, private router: Router, private sharedService: SharedService) { }

  ngOnInit() {
    this.getUser();
    this.error = 'Enter the name of the website';
    this.alert = '* Enter the website name';

    // fetching activated route from current route's params
    this.activatedRoute.params.subscribe(params => {
      this.websiteId = params['websiteId'];
    });

    // getting websit details as per websiteId
    this._websiteService.findWebsiteById(this.websiteId)
      .subscribe(
        (data: any) => {
          console.log('website by id: ', data);
          this.website = data;
        }
      );

    // getting list of all websites
    console.log(this.userId);
    this._websiteService.findWebsitesByUser(this.userId)
      .subscribe(
        (data: any) => {
          this.websites = data; },
        (error) => console.log(error)
      );
  }

  getUser(){
    //this.user = JSON.parse(localStorage.getItem("user"));
    this.user = this.sharedService.user;
    console.log(this.user);
    this.userId = this.user['_id'];
    console.log(this.userId);
  }

  updateWebsite() {

    if(this.website.name == '')
      this.flag = true;
    else {
      this._websiteService.updateWebsite(this.websiteId, this.website)
        .subscribe(
          (data: any) => this.router.navigate(['/user', 'website']),
          (error) => console.log(error)
        );
    }
  }

  deleteWebsite(){

    this._websiteService.deleteWebsite(this.websiteId)
      .subscribe(
        (data: any) => this.router.navigate(['/user', 'website']),
        (error) => console.log(error)
      );
  }

}
