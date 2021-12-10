import { Component, OnInit } from '@angular/core';
import { RD_CreateUser } from '../DevData';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { FormGroup } from '@angular/forms';
import { RD_CreateEvent } from '../RegDevData';
import { RD_DeleteEvent } from '../delete-event'
import { OrgEvent } from '../event.types';
import { EventAdminService } from '../event-admin.service';
import { AuthService } from '../auth.service';
import { EventService } from '../event.service';

@Component({
  selector: 'app-events-admin',
  templateUrl: './events-admin.component.html',
  styles: []
})
export class EventsAdminComponent implements OnInit {
  /* Form Stuff */
  model :any = {};
  createForm = new FormGroup({});
  deleteForm = new FormGroup({});
  createOptions: FormlyFormOptions = {};
  deleteOptions: FormlyFormOptions = {};
  createFields: FormlyFieldConfig[] = RD_CreateEvent;
  deleteFields: FormlyFieldConfig[] = RD_DeleteEvent;
  event: OrgEvent = null;
  uploaded = false;

  loggedIn = false;
  showForm_Create = false;
  showForm_Delete = false;

  /* Events */
  events$:any;

  constructor(
    private eas: EventAdminService, 
    private as: AuthService, 
    private es: EventService
    )
    {
    this.loggedIn = this.as.isLoggedIn();
    
  }

  ngOnInit() {
    this.events$ = this.es.getEvents(null);
  }

  createEvent() {
    this.event = this.eas.createEvent(
      this.model['eventName'],
      this.model['organizer'],
      this.model['eventID'],
      this.model['capacity']
    );
    this.uploadEvent();
    this.createOptions.resetModel();
    this.model = {};
  }

  uploadEvent() {
    if (this.event) {
      this.eas.uploadEvent(
        this.event)
        .then(() => {
          this.uploaded = true;
          this.showForm_Create = !this.showForm_Create;
        });
    }
  }

  deleteEvent() {
    this.eas.removeEvent(this.model['eventID']);
    this.showForm_Delete = !this.showForm_Delete
    this.deleteOptions.resetModel();
    this.model = {};
  }
}
