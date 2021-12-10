import { FormlyFieldConfig } from '@ngx-formly/core';


/**
 * Dynamic form for creating users
 */
export const RD_CreateUser: FormlyFieldConfig[] = [
  {
    key: 'firstName',
    type: 'input',
    templateOptions: {
      type: 'text',
      label: 'First Name',
      required: true
    },
  },
  {
    key: 'middleName',
    type: 'input',
    templateOptions: {
      type: 'text',
      label: 'Middle Name',
      required: false
    }
  },
  {
    key: 'lastName',
    type: 'input',
    templateOptions: {
      type: 'text',
      label: 'Last Name',
      required: true
    }
  },
  {
    key: 'preferredName',
    type: 'input',
    templateOptions: {
      type: 'text',
      label: 'Preferred Name',
      required: true
    }
  },
  {
    key: 'signup',
    type: 'select',
    templateOptions: {
      label: 'Signup method',
      required: true,
      options: [
        { label: 'Facebook', value: 'facebook' },
        { label: 'Phone', value: 'phone' },
        { label: 'Email', value: 'email' },
        { label: 'Google', value: 'google' },
      ]
    }
  },
  {
    key: 'signupData',
    type: 'input',
    templateOptions: {
      label: 'Signup data',
      type: 'text',
      required: true,
    }
  },
  {
    key: 'permission',
    type: 'select',
    templateOptions: {
      label: 'Permssion level',
      required: true,
      options: [
        { label: 'Subscriber', value: 'subscriber' },
        { label: 'Editor', value: 'editor' },
        { label: 'Admin', value: 'admin' },
        { label: 'Owner', value: 'owner' },
      ]
    }
  }
];


/**
 * Dynamic form for creating users
 */
export const RD_EditUser: FormlyFieldConfig[] = [
  {
    key: 'first',
    type: 'input',
  
    templateOptions: {
      type: 'text',
      label: 'First Name',
      required: false
    },
  },
  {
    key: 'middle',
    type: 'input',
  
    templateOptions: {
      type: 'text',
      label: 'Middle Name',
      required: false
    },
  },
  {
    key: 'last',
    type: 'input',

    templateOptions: {
      type: 'text',
      label: 'Last Name',
      required: false
    }
  },
  {
    key: 'preferred',
    type: 'input',
   
    templateOptions: {
      type: 'text',
      label: 'Preferred Name',
      required: false
    }
  },
  {
    key: 'email',
    type: 'input',
  
    templateOptions: {
      type: 'email',
      label: 'Email',
      required: false
    }
  }
];

  