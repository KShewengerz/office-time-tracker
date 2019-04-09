import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';

import { AuthService } from '@app/core/auth/auth.service';


@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  
  constructor(private router: Router,
              private authService: AuthService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const isLoggedIn = this.authService.isLoggedIn();
    
    if (isLoggedIn) return true;
    
    this.router.navigateByUrl('/');
    return false;
  }
  
}
