import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetNewComponent } from './widget-new.component';

describe('WidgetNewComponent', () => {
  let component: WidgetNewComponent;
  let fixture: ComponentFixture<WidgetNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
