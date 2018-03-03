import { Component, OnInit } from '@angular/core';
import {WidgetService} from "../../../services/widget.service.client";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-widget-edit',
  templateUrl: './widget-edit.component.html',
  styleUrls: ['./widget-edit.component.css']
})
export class WidgetEditComponent implements OnInit {

  widgetId: string;
  widget = {type: ''};
  header = 'Header'; youtube = 'YouTube'; text = 'Text'; html = 'HTML'; image = 'Image';

  constructor(private widgetService: WidgetService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    // fetching widgetId from current url
    this.activatedRoute.params
      .subscribe(
        (params) => {
          this.widgetId = params['widgetId'];
        }
      );

    // get widget type
    this.widgetService.findWidgetById(this.widgetId)
      .subscribe(
        (data: any) => this.widget.type = data.type
      );
  }

}
