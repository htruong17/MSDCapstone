import { Component, OnInit } from '@angular/core';
import { FormGroup} from '@angular/forms';
import { FieldArrayType, FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { HttpClient } from '@angular/common/http';
import { FormlyJsonschema } from '@ngx-formly/core/json-schema';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-registerpage',
  templateUrl: './registerpage.component.html',
  // template: `
  // <div class="mb-3">
  //   <legend *ngIf="to.label">{{ to.label }}</legend>
  //   <p *ngIf="to.description">{{ to.description }}</p>

  //   <div class="alert alert-danger" role="alert" *ngIf="showError && formControl.errors">
  //     <formly-validation-message [field]="field"></formly-validation-message>
  //   </div>

  //   <div *ngFor="let field of field.fieldGroup;let i = index;" class="row align-items-center">
  //     <formly-field class="col" [field]="field"></formly-field>
  //     <div class="col-2 text-right">
  //       <button class="btn btn-danger" type="button" (click)="remove(i)">-</button>
  //     </div>
  //   </div>

  //   <div class="d-flex flex-row-reverse">
  //     <button class="btn btn-primary" type="button" (click)="add()">+</button>
  //   </div>
  // </div>
  // `,
  styleUrls: ['./registerpage.component.css']
})
export class RegisterpageComponent{

  form: FormGroup;
  model: any;
  options: FormlyFormOptions;
  fields: FormlyFieldConfig[];

  type: string;
  examples = [
    // 'simple',
    'nested',
    // 'arrays',
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

  // constructor() { }

  // ngOnInit(): void {
  // }

  //form: FormGroup

  //ngOnInit(){

    // form = new FormGroup({})
    // model = { email: 'email@gmail.com' };

  constructor(
    private formlyJsonschema: FormlyJsonschema,
    private http: HttpClient,
  ){
    this.loadExample(this.examples[1])
  }
  
  loadExample(type: string) {
    this.http.get<any>(`assets/json-schema/${type}.json`).pipe(
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
	
  onSubmit() {
    console.log(this.model);
  }

}

