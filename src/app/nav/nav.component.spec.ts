import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavComponent } from './nav.component';
import {By} from "@angular/platform-browser";
import {LoginComponent} from "../login/login.component";

describe('NavComponent', () => {
  let component: NavComponent;
  let componentAfter: LoginComponent;
  let fixture: ComponentFixture<NavComponent>;
  let prefix: 'localhost:4200';

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
        LoginComponent,
      ],
      declarations: [ NavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should update component value after button click', () => {

    const actualUrl = window.location.href;
    const expectedUrl = '/Login';

    // Get the component value before button click
    const componentValueBefore = component.logout;
    // Find the button and trigger a click event
    const button = fixture.debugElement.query(By.css('button'));
    button.nativeElement.click();
    // Get the component value after button click
    const componentValueAfter = componentAfter.login;
    // Check that the component value has changed
    expect(componentValueBefore).toBe(componentValueAfter);
  });
});
