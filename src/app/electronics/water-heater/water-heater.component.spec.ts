import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterHeaterComponent } from './water-heater.component';

describe('WaterHeaterComponent', () => {
  let component: WaterHeaterComponent;
  let fixture: ComponentFixture<WaterHeaterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaterHeaterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaterHeaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
