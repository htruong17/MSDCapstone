import { Injectable } from '@angular/core';
import { ActivatedRoute, Router, UrlSegment, Params } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoutingService {

  constructor(
    private route: Router,
    private aRoute: ActivatedRoute) { }


  /**
   * Navigates back to the home/root directory
   */
  navigateHome(): Promise<boolean> {
    return this.route.navigate(['home']);
  }

 

 

 
}
