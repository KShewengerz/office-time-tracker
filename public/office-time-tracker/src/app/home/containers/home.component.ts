import { Component } from '@angular/core';

import { AuthService } from '@app/core/auth/auth.service';


@Component({
  selector    : 'app-home',
  templateUrl : './home.component.html',
  styleUrls   : ['./home.component.scss']
})
export class HomeComponent {
  
  constructor(private authService: AuthService) {}
  
  logOut(): void {
    this.authService.logout();
  }
  
}
