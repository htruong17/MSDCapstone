import { Component, Input, OnInit } from '@angular/core';
import { OrgEvent } from '../event.types';
import { EventService } from '../event.service';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styles: []
})
export class EventCardComponent implements OnInit{
  @Input() inputEvent: OrgEvent;
  @Input() isAdmin: boolean;
 
  constructor(
      private es:EventService
  ) { 
  }
    
  
  ngOnInit() {
 
    }

  activateEvent(eventID: string){
      this.es.activateEvent(eventID);
  }

  deactivateEvent(eventID: string){
    this.es.deactivateEvent(eventID);   
  }
}
