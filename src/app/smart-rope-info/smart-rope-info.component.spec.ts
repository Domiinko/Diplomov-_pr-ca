import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartRopeInfoComponent } from './smart-rope-info.component';

describe('SmartRopeInfoComponent', () => {
  let component: SmartRopeInfoComponent;
  let fixture: ComponentFixture<SmartRopeInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmartRopeInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmartRopeInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
