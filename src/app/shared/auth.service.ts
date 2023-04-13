import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {Router} from "@angular/router";
import {from, map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggin = false;
  //private uid: string ='';
  // private token = string;
  constructor(private fireauth : AngularFireAuth, private router : Router) { }

  login(email: string, password: string) {
    this.fireauth.signInWithEmailAndPassword(email, password).then(() => {
      localStorage.setItem('token', 'true');
      this.router.navigate(['/Main']);
      this.isLoggin= true;

    }, err => {
        alert('err.message');
        this.router.navigate(['/Login']);
    })
  }

  register(email: string, password: string) {
    this.fireauth.createUserWithEmailAndPassword(email, password).then(() => {
      localStorage.setItem('token', 'true');
      alert('Registrácia úspešná');
      this.router.navigate(['/Login']);
    }, err => {
      alert('err.message');
      this.router.navigate(['/Register']);
    })
  }

  logout() {
    this.fireauth.signOut().then(() => {
      localStorage.removeItem('token');
      this.router.navigate(['/Login']);
      this.isLoggin= false;
    }, err => {
      alert('err.message');
      // this.router.navigate(['/Register']);
    })
  }
  isLoggedIn(): boolean{

    return this.isLoggin;

  }

  // currentUser(): Observable<string> {
  //   // return this.fireauth.currentUser.catch();
  //   // return this.fireauth.currentUser.then(user => user?.uid ?? null);
  //   return from(this.fireauth.currentUser).pipe(
  //     map(user => user?.uid)
  //   );
  // }
  // getCurrentUser(): Observable<firebase.User | null> {
  //   return this.fireauth.user;
  // }

  getCurrentUserId(): Observable<string | null> {
    return this.fireauth.user.pipe(
      map(user => user ? user.uid : null)
    );
  }

}
