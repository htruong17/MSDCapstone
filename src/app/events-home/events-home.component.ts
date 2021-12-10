import { Component, OnInit } from '@angular/core';
import { OrgEvent } from '../event.types';
import { Observable } from 'rxjs';
import { EventService } from '../event.service';

@Component({
  selector: 'app-events-home',
  templateUrl: './events-home.component.html',
  styles: []
})
export class EventsHomeComponent implements OnInit {

  events$: Observable<OrgEvent[]>;
  constructor(private es: EventService) { }

  ngOnInit() {
    this.events$ = this.es.getEvents(true);
  }

}
