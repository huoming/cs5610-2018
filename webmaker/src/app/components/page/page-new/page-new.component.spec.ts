import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNewComponent } from './page-new.component';

describe('PageNewComponent', () => {
  let component: PageNewComponent;
  let fixture: ComponentFixture<PageNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
