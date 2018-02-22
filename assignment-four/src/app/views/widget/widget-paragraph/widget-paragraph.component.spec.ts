import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetParagraphComponent } from './widget-paragraph.component';

describe('WidgetParagraphComponent', () => {
  let component: WidgetParagraphComponent;
  let fixture: ComponentFixture<WidgetParagraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetParagraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetParagraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
