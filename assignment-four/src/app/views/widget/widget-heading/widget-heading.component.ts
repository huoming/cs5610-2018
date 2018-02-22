import {Component, Input, OnInit} from '@angular/core';
import {Widget} from '../../../models/widget.model.client';

@Component({
  selector: 'app-widget-heading',
  templateUrl: './widget-heading.component.html',
  styleUrls: ['./widget-heading.component.css']
})
export class WidgetHeadingComponent implements OnInit {
  @Input()
  widget: Widget;
  constructor() { }

  ngOnInit() {
  }

}
