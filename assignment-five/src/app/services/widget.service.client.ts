import {Injectable} from '@angular/core';
import {Widget} from '../models/widget.model.client';
import 'rxjs/Rx';

import {Http, Response} from '@angular/http';

@Injectable()
export class WidgetService {

  constructor(private http: Http){}

  findAllWidgets(){
    return this.http.get('http://localhost:3100/api/widget').map((response: Response) => {
       return response.json();
    })
  }
}
