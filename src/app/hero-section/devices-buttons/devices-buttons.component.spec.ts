import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevicesButtonsComponent } from './devices-buttons.component';

describe('DevicesButtonsComponent', () => {
  let component: DevicesButtonsComponent;
  let fixture: ComponentFixture<DevicesButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevicesButtonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevicesButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
