import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormlyFieldConfig} from '@ngx-formly/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { PermissionService } from './permission.service';
import { RoutingService } from './routing.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [
    `#drawer { background-color: #F1F5F9; height: calc(100% - 64px); margin-top: 64px;}`,
    `.active-link { color: rgb(63, 81, 181);}`,
    `.active-link:hover { background-color: rgba(153, 153, 153, 0.2);}`,
    `.example-icon { padding: 0 14px; }`,
    `.example-spacer { flex: 1 1 auto; }`,
    `sidenav mat-drawer mat-sidenav ng-tns-c2-0 ng-trigger ng-trigger-transform mat-drawer-side mat-sidenav-fixed ng-star-inserted {
      margin-top: 64px;
    }`,
    `mat-list#navBar::hover {
      max-width: 180px;
    }`,
    `.logo {
      width: 120px;
      height: 31px;
      background: rgba(255,255,255,.2);
      margin: 16px 28px 16px 0;
      float: left;
    }`,
    `.trigger {
        font-size: 18px;
        line-height: 64px;
        padding: 0 24px;
        cursor: pointer;
        transition: color .3s;
      }`,

    `.trigger:hover {
        color: #1890ff;
      }`
  ],
})
export class AppComponent implements OnInit{
  navConfig: any = {
    'closed': {
      'router': {
        'width': '100%',
        'margin': '0px'
      },
      'sidebar': {
        'width': '0px',
        'display': 'none'
      }
    },
    'semi-open': {
      'router': {
        'width': 'calc(100% - 70px)',
        'margin': '70px'
      },
      'sidebar': {
        'width': '70px',
        'display': 'block'
      }
    },
    'opened': {
      'router': {
        'width': 'calc(100% - 180px)',
        'margin': '180px'
      },
      'sidebar': {
        'width': '180px',
        'display': 'block'
      }
    }
  };
  pageMeta = environment.pageMeta;
  versionNumber = '1';
  loggedIn = false;
  sub: any = null;
  handset = false;
  sideBar = 'semi-open'; // closed, semi-open, opened
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  routes: any = null;

  isCollapsed = false;
  triggerTemplate: any = null;
  @ViewChild('trigger') customTrigger: TemplateRef<void>;

  /** custom trigger can be TemplateRef **/
  changeTrigger(): void {
    this.triggerTemplate = this.customTrigger;
  }

  /**
   * Basic constructor
   * @param breakpointObserver to determine page size
   */
  constructor(
    private breakpointObserver: BreakpointObserver,
    public as: AuthService,
    private ps: PermissionService,
    private rs: RoutingService) { }
  /**
   * Initialize variables
   */
  ngOnInit() {
    this.isHandset$.subscribe((r) => {
      this.sideBar = (r) ? 'closed' : 'opened';

    });
    this.sub = this.as.currentUser$.subscribe((res1) => {
      this.loggedIn = (res1) ? true : false;
      this.routes = this.ps.getCurrentUserPermissions();
    });
  }

  navigateLink(link: string) {
   
  }


  changeSidebar(status: string) {
    this.sideBar = status;
   
  }

  toggleView() {
    if (this.sideBar === 'semi-open') {
      this.sideBar = 'closed';
    } else if (this.sideBar === 'closed') {
      this.sideBar = 'semi-open';
    }
  }

  logOut(){
    this.as.logout();
  }
}

