import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevicesBurgerComponent } from './devices-burger.component';

describe('DevicesBurgerComponent', () => {
  let component: DevicesBurgerComponent;
  let fixture: ComponentFixture<DevicesBurgerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevicesBurgerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevicesBurgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
