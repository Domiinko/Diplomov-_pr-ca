import { TestBed } from '@angular/core/testing';
import { Router } from "@angular/router";
import { AuthService } from './auth.service';
import { LoginComponent } from "../login/login.component";


describe('AuthService', () => {
  let service: AuthService, fixture;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
    fixture = TestBed.createComponent(LoginComponent);
    let component = fixture.componentInstance;
    let router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});
