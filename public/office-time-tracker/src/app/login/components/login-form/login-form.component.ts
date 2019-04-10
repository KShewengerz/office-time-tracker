import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { filter } from 'rxjs/operators';

import { FormlyFieldConfig } from '@ngx-formly/core';

import { AuthService } from '@app/core/auth/auth.service';

import { Credential } from '@app/login/models/credential.model';

import { loginFields } from '@app/login/components/login-form/login-form.data';


@Component({
  selector    : 'app-login-form',
  templateUrl : './login-form.component.html',
  styleUrls   : ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  
  form: FormGroup = new FormGroup({});
  fields: FormlyFieldConfig[] = loginFields;
  
  errorMessage: string;
  
  constructor(private authService: AuthService,
              private router: Router) { }
              
  ngOnInit(): void {
    this.form.reset();
    
    this.form
      .valueChanges
      .pipe(filter(() => !!this.errorMessage))
      .subscribe(() => this.errorMessage = '');
  }
  
  login(data: Credential) {
     this.authService
      .login(data)
      .subscribe(
        response => {
          this.form.reset();
          this.router.navigate(['/home']);
        },
        ({ error }) => this.errorMessage = error.message
      );
  }

}
