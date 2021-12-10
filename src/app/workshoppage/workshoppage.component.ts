import { Component, OnInit } from '@angular/core';
import { FormGroup} from '@angular/forms';
import { FieldArrayType, FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { HttpClient } from '@angular/common/http';
import { FormlyJsonschema } from '@ngx-formly/core/json-schema';
import { tap } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { map } from '@firebase/util';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-workshoppage',
  templateUrl: './workshoppage.component.html',
  styleUrls: ['./workshoppage.component.css']
})
export class WorkshoppageComponent {


  //})



  // ngOnInit(): void {
  // }
  //private firestore: AngularFirestore;
  form: FormGroup;
  model: any;
  info: any;
  title:any;
  name:any;
  bio:any;
  details: any;
  options: FormlyFormOptions;
  fields: FormlyFieldConfig[];

  type: string;
  examples = [
    // 'simple',
    'Create New Workshop',
    // 'numbers',
    // 'references',
    // 'schema_dependencies',
    // 'null_field',
    // 'nullable',
    // 'allOf',
    // 'anyOf',
    // 'oneOf',
    // 'select_alternatives',
  ];

  load = [
    'Learning To Code In 16 Months'
  ];

  // constructor() { }

  ngOnInit(): void {
    this.loadData();
  }

  //form: FormGroup

  //ngOnInit(){

    // form = new FormGroup({})
    // model = { email: 'email@gmail.com' };

  constructor(
    private formlyJsonschema: FormlyJsonschema,
    private http: HttpClient,
    private firestore: AngularFirestore,
  ){
    //this.loadExample(this.examples[1])
  }
  
  
  loadExample(type: string) {
    this.http.get<any>(`assets/json-schema/workshop.json`).pipe(
      tap(({ schema, model }) => {
        this.type = type;
        this.form = new FormGroup({});
        this.options = {};
        this.fields = [this.formlyJsonschema.toFieldConfig(schema)];
        this.model = model;
        console.log("This works!");
      }),
    ).subscribe();
  }

  loadWorkshop() {
    // this.http.get<any>(`assets/json-schema/test.json`).pipe(
    //   tap(({ schema, model }) => {
    //     this.type = type;
    //     this.form = new FormGroup({});
    //     this.options = {};
    //     this.fields = [this.formlyJsonschema.toFieldConfig(schema)];
    //     this.model = model;
    //     console.log("This works!");
    //   }),
    // ).subscribe();
    return this.firestore.collection("workshops").snapshotChanges();
  }


  loadData() {
      this.loadWorkshop().subscribe(data => {
        this.info = data.map(e => {
          console.log(e.payload.doc.data());
          //this.info = e.payload.doc.data()
          return {
            id: e.payload.doc.id,
            data: e.payload.doc.data()
          } as any
        }) 
      })
  }

  showData() {
     this.title = document.getElementById("displayTitle");
     this.name = document.getElementById("displayName");
     this.bio = document.getElementById("displayBio");
     this.details = document.getElementById("displayDetails");

     //console.log(this.info[0].);

    //  this.title!.innerHTML = this.info[0].data.title;
    //   this.name!.innerHTML = this.info[0].data.name;
    //   this.bio!.innerHTML = this.info[0].data.bio;
    //   this.details!.innerHTML = this.info[0].data.about;
      this.title!.innerHTML = this.info[0].data.title;
      this.name!.innerHTML = "Author";
      document.getElementById('para1')!.innerHTML = this.info[0].data.name;
      this.bio!.innerHTML = "Bio";
      document.getElementById('para2')!.innerHTML = this.info[0].data.bio;
      this.details!.innerHTML = "About this Workshop";
      document.getElementById('para3')!.innerHTML = this.info[0].data.about;
  }

  saveData(data:any){
    this.firestore.collection("workshops").add(data);
  }
	
  // const Fs = require('fs')

// function writeToFile (data, path) {  
//   const json = JSON.stringify(data, null, 2)

//   Fs.writeFile(path, json, (err) => {
//     if (err) {
//       console.error(err)
//       throw err
//     }

//     console.log('Saved data to file.')
//   })
// }
  onSubmit() {
    console.log(this.model);
    alert(JSON.stringify(this.model));
    this.saveData(this.model);
    // const fs = require('fs-extra');
    // // const path = require('path');
    // fs.writeFile ("example.json", JSON.stringify(this.model));
    // {
     
    //   console.log('complete');
    // }
    //this.http.post<any>()
  }


}
