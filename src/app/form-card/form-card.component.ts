import { Component, Input, OnInit } from '@angular/core';
import { OrgEvent } from '../event.types';
import { EventService } from '../event.service';

@Component({
  selector: 'app-form-card',
  templateUrl: './form-card.component.html',
  styles: []
})
export class FormCardComponent implements OnInit{
  @Input() inputForm: OrgEvent;
  @Input() inputEvent: OrgEvent;
  formName: string;
 
  //@Input() isAdmin: boolean;
 
  constructor(
      private es:EventService
  ) { 
      
  }
    
  ngOnInit() {

    }



  setForm(eventID: string, form: string){
      this.es.setForm(eventID, form);
      console.log(form);
  }
}
