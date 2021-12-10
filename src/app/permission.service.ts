import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class PermissionService {
  permissions: { [key: string]: any } = {
    'subscriber': {...NAV_DEFAULT, ...NAV_DEFAULT_LOGIN},
    'dev': NAV_DEV,
    'super-admin': {
      ...NAV_DEFAULT,
      ...NAV_DEFAULT_LOGIN,
      ...NAV_EVENT_ADMIN, ...NAV_EVENTS_ADMIN,
      ...NAV_DEV,
    },
    'event-admin': NAV_EVENT_ADMIN,
    'events-admin': NAV_EVENTS_ADMIN,
  };

  constructor(
    private as: AuthService,
    private ds: DataService
  ) { }

  /**
   * Gets the navigation elements with permission
   * @param key the one you're searching for
   */
  getPermissions(key: string) {
    // console.log(this.permissions['super-admin']);
    return this.permissions[key];
  }

  /**
   * Gets the navigation elements with permission
   */
  getAllPermissions(): string[] {
    return Object.keys(this.permissions);
  }

  getCurrentUserPermissions(): any[] {
    if (this.as.currentUser) {
      let obj = { ...NAV_DEFAULT_LOGIN };
      this.as.currentUser.permissions.forEach((res1) => {
        const permission = this.getPermissions(res1);
        if (permission) {
          obj = { ...obj, ...permission };
        }
      });
      return this.ds.convertObjectArray(obj);
    } else {
      return this.ds.convertObjectArray(NAV_DEFAULT);
    }
  }


}

export const NAV_DEFAULT = {
  10: {
    order: 10,
    icon: 'explore',
    opened: false,
    path: 'events',
    text: 'Events'
  }
};

export const NAV_DEFAULT_LOGIN = {
  5: {
    icon: 'person',
    opened: false,
    path: 'profile',
    text: 'Your Profile',
    order: 5,
  },
};

export const NAV_EVENT_ADMIN = {
  10: {
    order: 10,
    icon: 'explore',
    opened: false,
    path: 'events',
    text: 'Events',
    submenu: [
      {
        icon: 'people_outline',
        path: 'events/admin', 'text': 'Admin'
      }
    ]
  }
};

export const NAV_EVENTS_ADMIN = {
  10: {
    order: 10,
    icon: 'explore',
    opened: false,
    path: 'events',
    text: 'Events',
    submenu: [
      {
        icon: 'people_outline',
        path: 'events/admin', 'text': 'Admin'
      }
    ]
  }
};



export const NAV_DEV = {
  100: {
    icon: 'build',
    opened: false,
    path: 'dev',
    text: 'Dev',
    order: 100,
    submenu: [
      {
        icon: 'code',
        path: 'dev/forms',
        text: 'Forms'
      },
      
    ]
  }
};
