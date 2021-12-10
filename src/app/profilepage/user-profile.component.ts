import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormGroup } from '@angular/forms';
import { RD_EditUser } from '../DevData';
import { User } from '../auth-types';
import { DataService } from '../data.service';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-profile-user',
  templateUrl: './user-profile.component.html',
  styles: [
    `mat-card-title { font-size: 14px; }`,
  ]
})
export class UserProfileComponent implements OnInit {
  model:any = {};
  form = new FormGroup({});
  options = {};
  fields: any = null;
  user: User;
  sub: any = null;
  userEvents: any[] = [];
  editProfile = false;
  loading = true;
  img = 'https://via.placeholder.com/160x240';
  constructor(
    private as: AuthService,
    private ds: DataService,
    public dialog: MatDialog,
    //private us: UserService,
    ) { }


  ngOnInit() {
    this.fields = RD_EditUser;
    this.as.currentUser$.subscribe((res) => {
      if (res) {
        this.user = res;
        this.model = {
          display: this.user.name.display,
          email: this.user.email,
          first: this.user.name.first,
          last: this.user.name.last,
          middle: this.user.name.middle,
          preferred: this.user.name.preferred
        };

        if (this.user && this.user.profilePhoto) {
          this.img = this.user.profilePhoto;
        }
        const year = new Date().getFullYear();
       
      }
    });
  }

  editUser() {
  
  }


}
