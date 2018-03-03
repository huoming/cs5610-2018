import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlickrImageSearchComponent } from './flickr-image-search.component';

describe('FlickrImageSearchComponent', () => {
  let component: FlickrImageSearchComponent;
  let fixture: ComponentFixture<FlickrImageSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlickrImageSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlickrImageSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
