import { Website } from '../models/website.model.client';
import {Injectable} from '@angular/core';


@Injectable()
export class WebsiteService {

    websites: Website[] = [
      new Website('321', 'Facebook', '123', 'test' ),
      new Website('111', 'Facebook1', '123', 'test' ),
      new Website('222', 'Facebook2', '123', 'test' ),
      new Website('333', 'Facebook3', '123', 'test' ),
      new Website('432', 'Twitter', '456', 'test' ),
      new Website('234', 'Amazon', '789', 'test' ),
    ];

  createWebsite(userId: String, website: Website) {

    const new_website: Website = {
      _id: (new Date()).getTime() + '',
      name: website.name,
      developerId: website.developerId,
      description: website.description
    };

    this.websites.push(new_website);
  }

  findWebsitesByUser(userId: String) {
    const resultSet = [];
    for ( const i in this.websites) {
      if (this.websites[i].developerId === userId) {
        resultSet.push(this.websites[i]);
      }
    }
    return resultSet;
  }

  findWebsitesByUser2(userId: String) {
   return this.websites.filter(function (website) {
     return website.developerId === userId;
   });
  }

  findWebsitesById(websiteId: String) {
    return this.websites.find(function (website) {
      return website._id === websiteId;
    });
  }

  updateWebsite(websiteId: String, website: Website) {
    for (const i in this.websites) {
      if (this.websites[i]._id === websiteId) {
        this.websites[i].name = website.name;
        this.websites[i].description = website.description;
      }
    }
  }

  deleteWebsite(websiteId: String) {
    for (const i in this.websites) {
      if (this.websites[i]._id === websiteId) {
        const j = +i;
        this.websites.splice(j, 1);
      }
    }
  }
}
