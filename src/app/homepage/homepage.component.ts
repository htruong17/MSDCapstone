import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styles: [
    `.row { margin: 20px 5px; }`,
    `.mat-card { border-radius: 0px }`
  ]
})
export class HomePageComponent implements OnInit, OnDestroy {
  announcementLength = 0;
  cardInfo: any[] = null;
  sub: any = null;
  loading = true;
  constructor(
    private ds: DataService
  ) { }

  ngOnInit() {
    
  }

  ngOnDestroy() {
    
  }
}
