import { Injectable } from '@angular/core';
// import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
// import { Observable } from 'rxjs';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Auth, onAuthStateChanged } from '@angular/fire/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  // canActivate(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   return true;
  // }

  constructor(
    private readonly auth: Auth,
    private readonly router: Router
  ) {}

  canActivate(): Promise<boolean | UrlTree> | boolean | UrlTree {
    return new Promise((resolve, reject) => {
      onAuthStateChanged(this.auth, (user) => {
        if (user) {
          resolve(true);
        } else {
          reject('No user logged in');
          this.router.navigateByUrl('/login');
        }
      });
    });
  }

}
