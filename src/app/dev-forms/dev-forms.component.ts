import { Component } from '@angular/core';
import { FormGroup} from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { HttpClient } from '@angular/common/http';
import { FormlyJsonschema } from '@ngx-formly/core/json-schema';
import { tap } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/compat/firestore';



@Component({
  selector: 'app-dev-forms',
  templateUrl: './dev-forms.component.html',
  styleUrls: []
})
export class DevFormsComponent{

  form: FormGroup;
  model: any;
  jsonString: string = "";
  jsonForm: any;
  options: FormlyFormOptions;
  fields: FormlyFieldConfig[];

  type: string;
  examples = [
    'create',
  ];


  constructor(
    private formlyJsonschema: FormlyJsonschema,
    private http: HttpClient,
    private afs: AngularFirestore
  ){
    this.loadExample(this.examples[0])
  }
  
  loadExample(type: string) {

    this.http.get<any>(`assets/json-schema/${type}.json`).pipe(
      tap(({ schema, model }) => {
        this.type = type;
        this.form = new FormGroup({});
        this.options = {};
        this.fields = [this.formlyJsonschema.toFieldConfig(schema)];
        this.model = model;
      }),
    ).subscribe();

  }
  saveData(data:any){
      const formName :string = data["formName"];
    this.afs.doc(`forms/${formName}`).set(data);
  }
 
  onSubmit() {
    console.log(this.model);
    console.log(this.model["formName"]);
    this.saveData(this.model);
    alert("FORM HAS BEEN CREATED");

  }

}

