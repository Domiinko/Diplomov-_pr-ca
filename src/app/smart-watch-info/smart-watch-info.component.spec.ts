import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartWatchInfoComponent } from './smart-watch-info.component';

describe('SmartWatchInfoComponent', () => {
  let component: SmartWatchInfoComponent;
  let fixture: ComponentFixture<SmartWatchInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmartWatchInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartWatchInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
