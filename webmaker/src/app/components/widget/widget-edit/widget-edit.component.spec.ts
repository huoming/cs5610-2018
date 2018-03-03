import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetEditComponent } from './widget-edit.component';

describe('WidgetEditComponent', () => {
  let component: WidgetEditComponent;
  let fixture: ComponentFixture<WidgetEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
