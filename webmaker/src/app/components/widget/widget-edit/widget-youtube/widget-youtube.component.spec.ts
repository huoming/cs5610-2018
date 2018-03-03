import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetYoutubeComponent } from './widget-youtube.component';

describe('WidgetYoutubeComponent', () => {
  let component: WidgetYoutubeComponent;
  let fixture: ComponentFixture<WidgetYoutubeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetYoutubeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetYoutubeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
