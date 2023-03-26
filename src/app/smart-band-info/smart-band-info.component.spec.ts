import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartBandInfoComponent } from './smart-band-info.component';

describe('SmartBandInfoComponent', () => {
  let component: SmartBandInfoComponent;
  let fixture: ComponentFixture<SmartBandInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmartBandInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartBandInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
