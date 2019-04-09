import { Injectable } from '@angular/core';
import { Router, Route, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, CanLoad } from '@angular/router';

import { AuthService } from '@app/core/auth/auth.service';


@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate, CanLoad {
  
  constructor(private router: Router,
              private authService: AuthService) {}
              
  canLoad(route: Route): boolean {
    if (this.authService.isLoggedIn) return true;
  
    this.router.navigateByUrl('/');
    return false;
  }
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (!this.authService.isLoggedIn) return true;
    
    this.router.navigateByUrl('/home');
    return false;
  }
  
}
