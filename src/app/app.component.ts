import { Component } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormlyFieldConfig} from '@ngx-formly/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: `
  //   <form [formGroup]="form" (ngSubmit)="onSubmit()">
  //     <formly-form [form]="form" [fields]="fields" [model]="model"></formly-form>
  //     <button type="submit" class="btn btn-default">Submit</button>
  //   </form>
  // `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // constructor(firestore: AngularFirestore){

  // }

  title = 'MSDCapstone';
  // form = new FormGroup({});
  // model = { email: 'email@gmail.com' };
  // fields: FormlyFieldConfig[] = [
  //   {
  //     key: 'name',
  //     type: 'input',
  //     templateOptions: {
  //       label: 'Name',
  //       placeholder: 'Enter name',
  //     }
  //   },
  //   {
  //     key: 'email',
  //     type: 'input',
  //     templateOptions: {
  //       type: 'email',
  //       label: 'Email',
  //       placeholder: 'Enter email',
  //     }
  //   },
  //   {
  //     key: 'amount',
  //     type: 'input',
  //     templateOptions: {
  //       type: 'number',
  //       label: 'Amount',
  //       placeholder: 'Enter amount',
  //     }
  //   },
  //   {
  //     key: 'date_of_birth',
  //     type: 'datepicker',
  //     templateOptions: {
  //       label: 'Datepicker',
  //       placeholder: 'Placeholder',
  //       description: 'Description',
  //       required: true,
  //     },
  //   },
  //   {
  //     key: 'terms',
  //     type: 'checkbox',
  //     templateOptions: {
  //       label: 'Accept terms',
  //       description: 'Please accept our terms',
  //       required: true,
  //     },
  //   },
  //   {
  //     key: 'terms_1',
  //     type: 'toggle',
  //     templateOptions: {
  //       label: 'Accept terms',
  //       description: 'Please accept our terms',
  //       required: true,
  //     },
  //   },
  //   {
  //     key: 'description',
  //     type: 'textarea',
  //     templateOptions: {
  //       label: 'Description',
  //       placeholder: 'Enter description',
  //     }
  //   },
  //   {
  //     key: 'gender',
  //     type: 'radio',
  //     templateOptions: {
  //       label: 'Gender',
  //       placeholder: 'Placeholder',
  //       description: 'Fill in your gender',
  //       options: [
  //         { value: 1, label: 'Male' },
  //         { value: 2, label: 'Femail' },
  //         { value: 3, label: 'I don\'t want to share that' },
  //       ],
  //     },
  //   },
  // ];
  // onSubmit() {
  //   console.log(this.model);
  // }
}

// import { Component } from '@angular/core';
// import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/
// import { Observable} from 'rxjs';
// import { s } from 'rxjs/operator/map';
// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   ref: AngularFireStorageReference;
//   task: AngularFireUploadTask;
//   uploadState: Observable<string>;
//   uploadProgress: Observable<number>;
//   downloadURL: Observable<string>;
//   constructor(private afStorage: AngularFireStorage) { }
//   upload(event) {
//     const id = Math.random().toString(36).substring(2);
//     this.ref = this.afStorage.ref(id);
//     this.task = this.ref.put(event.target.files[0]);
//     this.uploadState = this.task.snapshotChanges().pipe(map(s => s.state));
//     this.uploadProgress = this.task.percentageChanges();
//     this.downloadURL = this.task.downloadURL();
//   }
// }
