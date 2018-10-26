import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShiftregisterComponent } from './shiftregister.component';

describe('ShiftregisterComponent', () => {
  let component: ShiftregisterComponent;
  let fixture: ComponentFixture<ShiftregisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShiftregisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShiftregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
