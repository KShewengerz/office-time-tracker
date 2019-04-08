import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { FormlyFieldConfig } from '@ngx-formly/core';

import { AuthService } from '@app/core/auth/auth.service';

import { Credential } from '@app/login/models/credential.model';

import { loginFields } from '@app/login/components/login-form/login-form.data';


@Component({
  selector    : 'app-login-form',
  templateUrl : './login-form.component.html',
  styleUrls   : ['./login-form.component.scss']
})
export class LoginFormComponent {
  
  form: FormGroup = new FormGroup({});
  fields: FormlyFieldConfig[] = loginFields;
  
  constructor(private authService: AuthService,
              private router: Router) { }
  
  login(data: Credential) {
     this.authService
      .login(data)
      .subscribe(response => this.router.navigate(['/home']));
  }

}
