import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartScaleInfoComponent } from './smart-scale-info.component';

describe('SmartScaleInfoComponent', () => {
  let component: SmartScaleInfoComponent;
  let fixture: ComponentFixture<SmartScaleInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmartScaleInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartScaleInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
