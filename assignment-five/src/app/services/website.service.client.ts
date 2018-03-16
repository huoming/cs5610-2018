import {Injectable} from '@angular/core';
import {Website} from '../models/website.model.client';
import {WEBSITES} from './website.mock';
import {Http, Response} from '@angular/http';
import "rxjs/Rx";

@Injectable()
export class WebsiteServiceClient {
  websites: Website[] = WEBSITES;
  findAllWebSites() {
    return this.websites;
  }

  updateWebsite(userId: String, newWebsite: Website){
    const url =  'http://localhost:3100/api/user/' + userId + '/website/' + newWebsite._id;
    return this.http.put(url, newWebsite).map((response: Response) => {
      return response.json();
    });
  }

  findWebsiteById(userId: String, websiteId: String){
    const url = 'http://localhost:3100/api/user/' + userId + '/website/' + websiteId;
    return this.http.get(url).map((response: Response) => {
      return response.json();
    });
  }

  deleteWebsite(userId: String,  websiteId: String){
     const url = 'http://localhost:3100/api/user/' + userId + '/website/' + websiteId;
     return this.http.delete(url).map((response: Response) => {
       return response.json();
     });
  }

  createWebsiteForUser(userId: String, website: Website){
    const url = 'http://localhost:3100/api/user/' + userId + '/website';
    return this.http.post(url, website).map((response: Response) => {
       return response.json();
    })
  }


  findWebsiteForUser(userId: String){
    const url =  'http://localhost:3100/api/user/' + userId + '/website';
    return this.http.get(url).map((response: Response) => {
      return response.json();
    });
  }

  constructor(private http: Http){}
}
