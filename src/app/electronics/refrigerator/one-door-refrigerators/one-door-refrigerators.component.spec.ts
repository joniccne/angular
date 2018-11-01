import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneDoorRefrigeratorsComponent } from './one-door-refrigerators.component';

describe('OneDoorRefrigeratorsComponent', () => {
  let component: OneDoorRefrigeratorsComponent;
  let fixture: ComponentFixture<OneDoorRefrigeratorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneDoorRefrigeratorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneDoorRefrigeratorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
