import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { OrgEvent } from './event.types';
import { EventLocation, Dates } from './types';
import { AuthService } from './auth.service';
import { User } from './auth-types';



@Injectable({
  providedIn: 'root'
})
export class EventAdminService {
  constructor(
    private afs: AngularFirestore,
    private as: AuthService,
    ) { }

  /** Initializes the module */
  init() {

  }

  createEvent(
    eventName: string,
    eventOrganizer: string,
    eventID: string,
    capacity: number
  ): OrgEvent {
    return new OrgEvent(eventName,
      eventOrganizer, eventID, capacity);
  }

  uploadEvent(event: OrgEvent) {
    event.id = event.eventID;
    const eventJSON = JSON.parse(JSON.stringify(event));
    return this.afs.doc(`events/${event.id}`)
    .set(Object.assign({}, eventJSON));
  }

  removeEvent(id: string): Promise<void> {
    return this.afs.doc(`events/${id}`).delete();
  }

 
}
