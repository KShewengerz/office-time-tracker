import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AuthService } from '@app/core/auth/auth.service';

import { Employee } from '@app/shared/models/employee.model';


@Component({
  selector    : 'app-home',
  templateUrl : './home.component.html',
  styleUrls   : ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  employees: Employee[] = [];
  
  constructor(private activeRoute: ActivatedRoute,
              private authService: AuthService) {}
  
  ngOnInit(): void {
    this.employees = this.activeRoute.snapshot.data['employees'];
  }
  
  logOut(): void {
    this.authService.logout();
  }
  
}
