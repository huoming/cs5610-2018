import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebisteNewComponent } from './webiste-new.component';

describe('WebisteNewComponent', () => {
  let component: WebisteNewComponent;
  let fixture: ComponentFixture<WebisteNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebisteNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebisteNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
