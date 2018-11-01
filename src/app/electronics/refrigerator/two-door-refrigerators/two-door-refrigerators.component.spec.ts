import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoDoorRefrigeratorsComponent } from './two-door-refrigerators.component';

describe('TwoDoorRefrigeratorsComponent', () => {
  let component: TwoDoorRefrigeratorsComponent;
  let fixture: ComponentFixture<TwoDoorRefrigeratorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwoDoorRefrigeratorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoDoorRefrigeratorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
