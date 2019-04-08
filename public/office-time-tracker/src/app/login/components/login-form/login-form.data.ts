import { FormlyFieldConfig } from '@ngx-formly/core';


export const loginFields: FormlyFieldConfig[] = [
  {
    key: 'Username',
    type: 'input',
    templateOptions: {
      placeholder: 'Username',
      required: true
    }
  },
  {
    key: 'Password',
    type: 'input',
    templateOptions: {
      placeholder: 'Password',
      type: 'password',
      required: true
    }
  }
];
