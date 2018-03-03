import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetHtmlComponent } from './widget-html.component';

describe('WidgetHtmlComponent', () => {
  let component: WidgetHtmlComponent;
  let fixture: ComponentFixture<WidgetHtmlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetHtmlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetHtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
