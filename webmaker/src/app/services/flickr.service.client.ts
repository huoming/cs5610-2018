/**
 * Created by mayankrd on 8/16/17.
 */
import {Http} from '@angular/http';
import {Injectable} from '@angular/core';

@Injectable() // needed as we're injecting Http service into this service
export class FlickrService {

  key = '90ea0df0685933f65ea96fab852a3023';
  secret = '59b7fb7ceb0a467b';
  urlBase = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&api_key=API_KEY&text=TEXT';

  constructor(private _http: Http) {}

  searchPhotos(searchTerm: any) {
    const url = this.urlBase
      .replace('API_KEY', this.key)
      .replace('TEXT', searchTerm);
    return this._http.get(url);
  }
}
