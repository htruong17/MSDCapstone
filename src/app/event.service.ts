import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { OrgEvent} from './event.types';
import { DataService } from './data.service';
import { User } from './auth-types';
import { filter } from 'rxjs/operators';
import { doc, updateDoc, arrayUnion, query, where} from '@firebase/firestore';



@Injectable({
  providedIn: 'root'
})
export class EventService {
  constructor(
    private afs: AngularFirestore,
    private ds: DataService) { }


  getEvents(active: boolean): Observable<OrgEvent[]> {
    if (active == null) {
      return <Observable<OrgEvent[]>>
        this.afs.collection(`events`)
          .valueChanges().pipe(filter((r:any) => (r && r['id'] !== 'init')));
    }
    return <Observable<OrgEvent[]>>
      this.afs.collection(`events`,
        ref => ref.where('active', '==', true)) 
        .valueChanges().pipe(filter((r:any) => (r && r['id'] !== 'init')));
  }

  getForms(active: boolean): Observable<OrgEvent[]> {
    if (active == null) {
      return <Observable<OrgEvent[]>>
        this.afs.collection(`forms`)
          .valueChanges().pipe(filter((r:any) => (r && r['formName'] !== 'init')));
    }
    return <Observable<OrgEvent[]>>
      this.afs.collection(`forms`) 
        .valueChanges().pipe(filter((r:any) => (r && r['formName'] !== 'init')));
  }

 
  getEvent(eventID: string): Observable<OrgEvent> {
    return <Observable<OrgEvent>>
      this.afs.doc(`events/${eventID}`).valueChanges();
  }

  activateEvent(eventID: string){
    return this.afs.doc(`events/${eventID}`).update({"active":true});
  }

  deactivateEvent(eventID: string){
    return this.afs.doc(`events/${eventID}`).update({"active":false});
  }

  setForm(eventID: string, form: string){
    return this.afs.doc(`events/${eventID}`).update({"formName":form});
  }

  registerForEvent(eventID: string, userID: string, name:string, count: number){
    this.afs.doc(`events/${eventID}`).update({attendees: arrayUnion({name,userID})});
    return this.afs.doc(`events/${eventID}`).update({"registeredCount":count});
  }

 

  getRegisteredAttendees(eventID: string):Observable<any>{
    return this.afs.collection(`events/${eventID}/registrationData`).snapshotChanges();
    
  }



}


