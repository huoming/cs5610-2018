import { Component, OnInit } from '@angular/core';
import {Website} from '../../models/website.model.client';
// import {WEBSITES} from '../../services/website.mock';
import {WebsiteServiceClient} from '../../services/website.service.client';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-website-list',
  templateUrl: './website-list.component.html',
  styleUrls: ['./website-list.component.css']
})
export class WebsiteListComponent implements OnInit {
  websiteName: String;
  websites: Website[] = [];
  userId: String;
  website: Website;
  constructor(private activeRoute: ActivatedRoute, private websiteService: WebsiteServiceClient) { }

  updateWebsite( name: String){
    const newWebsite = new Website(this.website._id, name, this.website.developerId);
    this.websiteService.updateWebsite(this.userId, newWebsite).subscribe((websites) => {
      this.websites = websites;
    })
  }

  selectWebsite( websiteId: String){
    this.websiteService.findWebsiteById(this.userId, websiteId).subscribe((website) => {
      this.website = website;
      this.websiteName = website.name;
    })
  }

  deleteWebsite(websiteId: String){
    this.websiteService.deleteWebsite(this.userId, websiteId).subscribe((websites) => {
      this.websites = websites;
    });
  }

  createWebsite(name: String ){
    const website: Website = new Website('', name, this.userId);
    this.websiteService.createWebsiteForUser(this.userId, website)
      .subscribe((websites) => {
        this.websites = websites;
      });
  }

  ngOnInit() {
    this.activeRoute.params.subscribe((params => {
      this.userId = params['userId'];
      console.log("userId is " + this.userId);
      this.websiteService.findWebsiteForUser(this.userId)
        .subscribe((websites) => {
        this.websites = websites;
      });
    }));
  }

}
