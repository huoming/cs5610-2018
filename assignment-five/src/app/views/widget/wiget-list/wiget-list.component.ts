import { Component, OnInit } from '@angular/core';
import {WidgetService} from '../../../services/widget.service.client';
import {Widget} from '../../../models/widget.model.client';

@Component({
  selector: 'app-wiget-list',
  templateUrl: './wiget-list.component.html',
  styleUrls: ['./wiget-list.component.css']
})
export class WigetListComponent implements OnInit {

  widgets: Widget[];
  constructor(private widgetService: WidgetService) { }

  ngOnInit() {
   // this.widgets = this.widgetService.findAllWidgets();
    this.widgetService.findAllWidgets().subscribe((widgets : Widget[]) => {
      console.log("widgets");
      this.widgets = widgets;
      console.log(this.widgets);
    })
  }

}
