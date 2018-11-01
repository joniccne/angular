import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuctionComponent } from './suction.component';

describe('SuctionComponent', () => {
  let component: SuctionComponent;
  let fixture: ComponentFixture<SuctionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuctionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
