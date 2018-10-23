import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';


@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(public router: Router) {}

  canActivate(): boolean {
    if (!localStorage.getItem('name')) {
      this.router.navigate(['']);
      alert("Please Login");
      return false;
    }
    return true;
  }

}