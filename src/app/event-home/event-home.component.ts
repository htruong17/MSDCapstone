import { Component, OnInit } from '@angular/core';
import { RoutingService } from '../routing.service';
import { EventService } from '../event.service';
import { Observable } from 'rxjs';
import { OrgEvent } from '../event.types';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-event-home',
  templateUrl: './event-home.component.html',
  styles: [
    `.row mat-card {margin-top: 20px}`,
    `mat-card {width: 90%; margin: 0px auto;}`
  ]
})
export class EventHomeComponent implements OnInit {
  eventID: string = null;
  event$: Observable<OrgEvent> = null;
  event: OrgEvent = null;
  sub: any;
  registered: boolean;
  constructor(private rs: RoutingService, private es: EventService, private aRoute: ActivatedRoute, private as: AuthService) { }

  ngOnInit() {
    this.aRoute.params.subscribe(params => {
      this.eventID = params.id;
      this.event$ = this.es.getEvent(this.eventID);
      this.sub = this.event$.subscribe(res => {
        if(res.active == true){
        this.event = res;
        this.checkIfRegistered();
      }
      });
    });
    

  }


  checkIfRegistered(){
    this.es.getRegisteredAttendees(this.event.eventID).pipe(map((changes)=> changes.map((c:any) => ({ id: c.payload.doc.id, ...c.payload.doc.data()})))).
    subscribe(data => {
      const num = this.as.getUserID();
      for (let attendee of data){
        if( num == attendee["id"]){
          this.registered = true;
        }
      }
    })
  }
    

}
