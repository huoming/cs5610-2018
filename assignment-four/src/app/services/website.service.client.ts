import {Injectable} from '@angular/core';
import {Website} from '../models/website.model.client';
import {WEBSITES} from './website.mock';

@Injectable()
export class WebsiteService {
  websites: Website[] = WEBSITES;
  findAllWebSites() {
    return this.websites;
  }
}
