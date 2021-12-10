import { Component, OnInit, ViewChild, OnDestroy, ViewChildren, QueryList } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { OrgEvent } from '../event.types';
import { Observable } from 'rxjs';
import { EventService } from '../event.service';
import { MatDialog } from '@angular/material/dialog';
import { DataService } from '../data.service';
//import { UserService } from '../user.service';

@Component({
  selector: 'app-event-admin',
  templateUrl: './event-admin.component.html',
  styles: [
    `mat-tab { padding: 20px 10px; }`,
    `mat-card { margin: 20px 10px; padding: 10px 20px}`
  ]
})
export class EventAdminComponent implements OnInit {
  model = {};
  form = new FormGroup({});
  options:any = null;
 

  
  /* Forms */
  forms$: any

  event$: Observable<OrgEvent>;
  eventID: string;
  sub:any = null;
  event: OrgEvent = null;

  constructor(
    private aRoute: ActivatedRoute,
    private es: EventService,
    public dialog: MatDialog,
    private ds: DataService,
    //private us: UserService
    ) { }

  ngOnInit() {
    this.forms$ = this.es.getForms(null);


    this.aRoute.params.subscribe(params => {
      this.eventID = params.id;
    
      this.event$ = this.es.getEvent(this.eventID);

      this.sub = this.event$.subscribe(res => {
        this.event = res;
      });
    });
  }


  

  
}
