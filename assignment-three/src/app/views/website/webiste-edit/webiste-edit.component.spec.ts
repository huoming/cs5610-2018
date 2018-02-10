import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebisteEditComponent } from './webiste-edit.component';

describe('WebisteEditComponent', () => {
  let component: WebisteEditComponent;
  let fixture: ComponentFixture<WebisteEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebisteEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebisteEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
