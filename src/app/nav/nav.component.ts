import { Component, OnInit } from '@angular/core';
import {AuthService} from "../shared/auth.service";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private auth : AuthService) { }

  ngOnInit(): void {
  }

  logout(){
    this.auth.logout();
  }

  //isLoggin=false;


  public isLoggedIn() {

   // return this.isLoggin=true;
  return this.auth.isLoggedIn();
  }




  // public visible(){
  //   // const token = localStorage.getItem('authToken');
  //   if ((localStorage.getItem('authToken')) === true) {
  //     return true; // ak je token v localStorage, tak vráti true
  //   } else {
  //     return false; // ak nie je token v localStorage, tak vráti false
  //   }
  // }

}
