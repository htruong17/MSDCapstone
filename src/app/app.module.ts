import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { SignUppageComponent } from './sign-uppage/sign-uppage.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { HomepageComponent } from './homepage/homepage.component'
import { RegisterpageComponent } from './registerpage/registerpage.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat'
import { AngularFirestore } from '@angular/fire/compat/firestore'
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyModule , FormlyFieldConfig} from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatRadioModule } from '@angular/material/radio'
import { MatSelectModule } from '@angular/material/select'
import { MatButtonModule } from '@angular/material/button'
import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatNativeDateModule } from '@angular/material/core'
import { MatSlideToggleModule} from '@angular/material/slide-toggle'
import { ArrayTypeComponent } from './array'
import { ObjectTypeComponent } from './object';
import { CommonModule } from '@angular/common';


//import { initializeApp } from 'firebase/app';
//import { getFirestore, collection, getDocs } from 'firebase/firestore/lite'
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { enableIndexedDbPersistence } from '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCqe7ei1jfkopPuq6fj-0vgNhUTLwBxX9c",
  authDomain: "msdcapstone.firebaseapp.com",
  databaseURL: "https://msdcapstone-default-rtdb.firebaseio.com",
  projectId: "msdcapstone",
  storageBucket: "msdcapstone.appspot.com",
  messagingSenderId: "417953233173",
  appId: "1:417953233173:web:03aebf4935b5ee63ae111c",
  measurementId: "G-RS2DLKDK5C"
};

export function minItemsValidationMessage(err:any, field: FormlyFieldConfig) {
  return `should NOT have fewer than ${field.templateOptions?.minItems} items`;
}

export function maxItemsValidationMessage(err:any, field: FormlyFieldConfig) {
  return `should NOT have more than ${field.templateOptions?.maxItems} items`;
}

export function minlengthValidationMessage(err:any, field: FormlyFieldConfig) {
  return `should NOT be shorter than ${field.templateOptions?.minLength} characters`;
}

export function maxlengthValidationMessage(err:any, field: FormlyFieldConfig) {
  return `should NOT be longer than ${field.templateOptions?.maxLength} characters`;
}

export function minValidationMessage(err:any, field: FormlyFieldConfig) {
  return `should be >= ${field.templateOptions?.min}`;
}

export function maxValidationMessage(err:any, field: FormlyFieldConfig) {
  return `should be <= ${field.templateOptions?.max}`;
}

export function multipleOfValidationMessage(err:any, field: FormlyFieldConfig) {
  return `should be multiple of ${field.templateOptions?.step}`;
}

export function exclusiveMinimumValidationMessage(err:any, field: FormlyFieldConfig) {
  return `should be > ${field.templateOptions?.step}`;
}

export function exclusiveMaximumValidationMessage(err:any, field: FormlyFieldConfig) {
  return `should be < ${field.templateOptions?.step}`;
}

export function constValidationMessage(err:any, field: FormlyFieldConfig) {
  return `should be equal to constant "${field.templateOptions?.const}"`;
}

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LoginpageComponent,
    SignUppageComponent,
    RegisterpageComponent,
    ObjectTypeComponent,
    ArrayTypeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormlyModule.forRoot({ extras: { 
      lazyRender: true },
      validationMessages: [
        { name: 'required', message: 'This field is required' },
        { name: 'null', message: 'should be null' },
        { name: 'minlength', message: minlengthValidationMessage },
        { name: 'maxlength', message: maxlengthValidationMessage },
        { name: 'min', message: minValidationMessage },
        { name: 'max', message: maxValidationMessage },
        { name: 'multipleOf', message: multipleOfValidationMessage },
        { name: 'exclusiveMinimum', message: exclusiveMinimumValidationMessage },
        { name: 'exclusiveMaximum', message: exclusiveMaximumValidationMessage },
        { name: 'minItems', message: minItemsValidationMessage },
        { name: 'maxItems', message: maxItemsValidationMessage },
        { name: 'uniqueItems', message: 'should NOT have duplicate items' },
        { name: 'const', message: constValidationMessage },
      ],
      types: [
        { name: 'string', extends: 'input' },
        {
          name: 'number',
          extends: 'input',
          defaultOptions: {
            templateOptions: {
              type: 'number',
            },
          },
        },
        {
          name: 'integer',
          extends: 'input',
          defaultOptions: {
            templateOptions: {
              type: 'number',
            },
          },
        },
        { name: 'boolean', extends: 'checkbox' },
        { name: 'enum', extends: 'select' },
        // { name: 'null', component: NullTypeComponent, wrappers: ['form-field'] },
        { name: 'array', component: ArrayTypeComponent },
        { name: 'object', component: ObjectTypeComponent },
        // { name: 'multischema', component: MultiSchemaTypeComponent },
      ],
    }),
    FormlyBootstrapModule,
    FormsModule,
    MatDatepickerModule,
    AngularFireModule.initializeApp(firebaseConfig),
    MatCheckboxModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatNativeDateModule,
    MatSlideToggleModule,
    HttpClientModule,
    // provideFirebaseApp(() => initializeApp(firebaseConfig)),
    // provideFirestore(() => {
    //   const firestore = getFirestore();
    //   enableIndexedDbPersistence(firestore);
    //   return firestore;
    // }),
    // provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
