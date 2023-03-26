import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartBarometerInfoComponent } from './smart-barometer-info.component';

describe('SmartBarometerInfoComponent', () => {
  let component: SmartBarometerInfoComponent;
  let fixture: ComponentFixture<SmartBarometerInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmartBarometerInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartBarometerInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
