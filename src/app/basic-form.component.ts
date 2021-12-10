import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styles: ['']
})
export class BasicFormComponent {
  @Input() valid = true;
  @Input() fields: any;
  @Input() options: any;
  @Input() model: any = {};
  @Output() submitForm: EventEmitter<any> = new EventEmitter();
  @Input() submitText = 'Submit';

  form = new FormGroup({});
  constructor() { }

  submit() {
    if (this.valid && this.form.valid) {
      this.submitForm.emit(this.model);
    }
  }

  resetForm() {
    this.model = {};
  }
}
