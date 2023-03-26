import {ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';
import { AngularFireModule} from "@angular/fire/compat";
import { LoginComponent } from './login.component';
import {By} from "@angular/platform-browser";



describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;


  beforeEach(async () => {
  //  component = new LoginComponent(routerSpy, new FormBuilder(), loginServiceSpy);

    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('submitted should be true when login() is clicked', () => {
    const button = fixture.debugElement.nativeElement.query(By.css('button'));
    // Create a spy on the component's "onButtonClick" method
    spyOn(component, 'login');
    // Trigger button click
    button.nativeElement.click();
    // Check that component's "onButtonClick" method was called
    expect(component.login).toHaveBeenCalled();
    //expect(component.login).toBeTrue();
    // Check that the function returned true
    expect(component.login).toBe(true);
  });

  it('should set isAuthenticated to true when login button is clicked', () => {
    fakeAsync(() => {
      // Find the login button
      const loginButton = fixture.debugElement.nativeElement.query(By.css('button'));
      // Trigger a click on the login button
      loginButton.click();
      // Check that isAuthenticated is true
      expect(component.login).toHaveBeenCalled();
    });
  });

  it('should chceck if button click function being called', fakeAsync(() => {
    jest.spyOn(component,'login');
    const button = fixture.debugElement.nativeElement.querySelector(fixture, 'btn');
    button.click();

    tick();

    expect(component.login).toHaveBeenCalled();
  }));

});
