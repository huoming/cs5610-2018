import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetHeadingComponent } from './widget-heading.component';

describe('WidgetHeadingComponent', () => {
  let component: WidgetHeadingComponent;
  let fixture: ComponentFixture<WidgetHeadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetHeadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
