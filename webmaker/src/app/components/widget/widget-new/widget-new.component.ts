import { Component, OnInit } from '@angular/core';
import {WidgetService} from '../../../services/widget.service.client';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-widget-new',
  templateUrl: './widget-new.component.html',
  styleUrls: ['./widget-new.component.css']
})
export class WidgetNewComponent implements OnInit {

  websiteId: string;
  pageId: string;
  widgetId: string;
  widget = {};

  defaultWidgetValues =
  {
    'Header': {type: 'Header', 'size' : 1},
    'Image': {type: 'Image', width: '100%'},
    'YouTube': {type: 'YouTube', width: '100%'},
    'HTML': {type: 'HTML'},
    'Text': {type: 'Text', placeholder: ''}
  };

  constructor(private widgetService: WidgetService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.websiteId = params['websiteId'];
          this.pageId = params['pageId'];
        }
      );
  }

  // creating a widget with default values
  createWidget(widgetType) {

    this.widget = this.defaultWidgetValues[widgetType];
    this.widgetService.createWidget(this.pageId, this.widget)
      .subscribe(
        (data: any) => {
            this.widgetId = data._id;
            this.router.navigate(['/user', 'website', this.websiteId, 'page', this.pageId, 'widget', this.widgetId]);
        },
        (error: any) => console.log(error)
      );
  }

}
