import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WigetListComponent } from './wiget-list.component';

describe('WigetListComponent', () => {
  let component: WigetListComponent;
  let fixture: ComponentFixture<WigetListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WigetListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WigetListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
