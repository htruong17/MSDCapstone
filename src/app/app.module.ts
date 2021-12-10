import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { SignUppageComponent } from './sign-uppage/sign-uppage.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { HomePageComponent } from './homepage/homepage.component'
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
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatNativeDateModule } from '@angular/material/core'
import { MatSlideToggleModule} from '@angular/material/slide-toggle'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs'
import { MatStepperModule } from '@angular/material/stepper';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCard, MatCardModule } from '@angular/material/card';
import { ArrayTypeComponent } from './array'
import { ObjectTypeComponent } from './object';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzLayoutModule } from 'ng-zorro-antd/layout'
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { LayoutModule } from '@angular/cdk/layout';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzInputModule } from 'ng-zorro-antd/input';

//import { FilterPipe } from './filter.pipe';





//import { initializeApp } from 'firebase/app';
//import { getFirestore, collection, getDocs } from 'firebase/firestore/lite'
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { enableIndexedDbPersistence } from '@firebase/firestore';
import { WorkshoppageComponent } from './workshoppage/workshoppage.component';
import { AuthService } from './auth.service';
import { EventHomeComponent } from './event-home/event-home.component';
import { UserProfileComponent } from './profilepage/user-profile.component';
import { BasicFormComponent } from './basic-form.component';
import { EventAdminComponent } from './event-admin/event-admin.component';
import { EventsAdminComponent } from './events-admin/events-admin.component';
import { EventCardComponent } from './event-card/event-card.component';
import { EventsHomeComponent } from './events-home/events-home.component';
import { DevFormsComponent } from './dev-forms/dev-forms.component';
import { FormCardComponent } from './form-card/form-card.component';


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
    HomePageComponent,
    LoginpageComponent,
    SignUppageComponent,
    RegisterpageComponent,
    ObjectTypeComponent,
    ArrayTypeComponent,
    WorkshoppageComponent,
    EventHomeComponent,
    UserProfileComponent,
    BasicFormComponent,
    EventAdminComponent,
    EventsAdminComponent,
    //FilterPipe,
    EventCardComponent,
    EventsHomeComponent,
    DevFormsComponent,
    FormCardComponent
  ],
  imports: [
    LayoutModule,
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
        { name: 'array', component: ArrayTypeComponent },
        { name: 'object', component: ObjectTypeComponent },
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
    MatProgressSpinnerModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatListModule,
    MatExpansionModule,
    MatTabsModule,
    MatCardModule,
    MatStepperModule,
    MatProgressBarModule,
    MatPaginatorModule,
    MatTableModule,
    MatTooltipModule,
    HttpClientModule,
    NzButtonModule,
    NzCardModule,
    NzEmptyModule,
    NzLayoutModule,
    NzIconModule,
    NzMenuModule,
    NzAvatarModule,
    NzCollapseModule,
    NzInputModule,
    NzListModule,
    // provideFirebaseApp(() => initializeApp(firebaseConfig)),
    // provideFirestore(() => {
    //   const firestore = getFirestore();
    //   enableIndexedDbPersistence(firestore);
    //   return firestore;
    // }),
    // provideFirestore(() => getFirestore())
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
