import { FormlyFieldConfig } from '@ngx-formly/core';


export const loginFields: FormlyFieldConfig[] = [
  {
    key: 'username',
    type: 'input',
    templateOptions: {
      placeholder: 'Username',
      required: true
    }
  },
  {
    key: 'password',
    type: 'input',
    templateOptions: {
      placeholder: 'Password',
      type: 'password',
      required: true
    }
  }
];
