import {Component, Input, OnInit} from '@angular/core';
import {Widget} from '../../../models/widget.model.client';

@Component({
  selector: 'app-widget-iframe',
  templateUrl: './widget-iframe.component.html',
  styleUrls: ['./widget-iframe.component.css']
})
export class WidgetIframeComponent implements OnInit {

  @Input()
  widget: Widget;
  constructor() { }

  ngOnInit() {
  }

}
