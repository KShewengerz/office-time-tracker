import { Component, OnInit } from '@angular/core';


@Component({
  selector    : 'app-login',
  templateUrl : './login.component.html',
  styleUrls   : ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  gridColumn: number;
  gridRowHeight: string;
  
  constructor() { }

  ngOnInit() {
    this.setGridConfig(window.innerWidth);
  }
  
  setGridConfig(innerWidth: number): void {
    if (innerWidth <= 930) {
      this.gridColumn = 1;
      this.gridRowHeight = '1:0.5';
    } else {
      this.gridColumn = 2;
      this.gridRowHeight = '2:2';
    }
  }

}
