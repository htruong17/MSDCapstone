import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Auth, GoogleAuthProvider} from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import * as firebase from 'firebase/auth';
import { Observable, of, BehaviorSubject} from 'rxjs';
import { User, PermissionTypes, LoginTypes } from './auth-types';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { RoutingService } from './routing.service';
import { switchMap, filter, concatMap, take, find, tap, map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentUserID: string = null;
  currentUser$: Observable<User>;
  currentUser: User = null;
  loggedIn$: BehaviorSubject<any>;
  loggedIn = false;
  permissions$: BehaviorSubject<boolean>;
  constructor(
    public afAuth: AngularFireAuth,
    public afs: AngularFirestore,
    private rs: RoutingService) {
    this.permissions$ = new BehaviorSubject<boolean>(false);
    this.loggedIn$ = new BehaviorSubject(false);
    this.updateLocal();

    this.currentUser$ = this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          if (user.emailVerified || this.getUserLoginMethod(user).indexOf(`facebook.com`) > -1) {
            this.currentUserID = user.uid;
            const obs = this.afs.doc<User>(`users/${user.uid}`).valueChanges();
            obs.subscribe(async (res) => {
              if (!res) {
                this.createUser(await this.afAuth.currentUser, 'unknown');
              } else {
                this.currentUser = res;
                this.loggedIn$.next(true);
                this.loggedIn = true;
              }
              this.updateLocal(JSON.stringify(this.currentUserID), JSON.stringify(this.currentUser));
           
            });

            return obs;
          } else {
            if (10000 > Math.abs((new Date(user.metadata.creationTime)).getTime() - (new Date(user.metadata.lastSignInTime)).getTime())) {
          

            }
            this.logout();
            return of(null);
          }
        } else {
          this.currentUserID = null;
          this.currentUser = null;
          this.updateLocal(null, null);
          return of(null);
        }
      })
    );
  }

  updateLocal(userID?: string, userData?: any) {

    if (typeof userID === 'undefined') {
    } else {
      localStorage.setItem('userData', userData);
      localStorage.setItem('userID', userID);
    }
    this.currentUserID = JSON.parse(localStorage.getItem('userID'));
    this.currentUser = JSON.parse(localStorage.getItem('userData'));
    this.loggedIn$.next(this.currentUserID !== null);
  
  }


  getUserLoginMethod(user: firebase.User) {
    return user.providerData.map(r => r.providerId);
  }

  createUser(user: firebase.User, loginMethod: LoginTypes) {
    // creating user...

    const displayName = (user.displayName) ? user.displayName : 'Anonymous Name';
    const split = displayName.split(' ');
    const newUser = new User(user.uid,
      split[0], '', split[split.length - 1],
      displayName, loginMethod, user.email, user.email, 'super-admin', user.photoURL);
    this.uploadNewUser(newUser).then(() => {
      // @todo ensure it propogates correct fields - possibly done
      const base = `users/${user.uid}`;
    });
  }



  uploadNewUser(user: User) {
    // const id = this.afs.createId();
    // TODO also update the document of users for the organization
    // user.id = id;
    return this.afs.doc(`users/${user.id}`).set(JSON.parse(JSON.stringify(user)));
  }

  login(email: string, password: string) {
    this.afAuth.signInWithEmailAndPassword(email, password)
    .then(value => {
      console.log('Nice, it worked!');
   
    })
    .catch(err => {
      console.log('Something went wrong: ', err.message);
    });
  }

  emailSignup(email: string, password: string) {
    this.afAuth.createUserWithEmailAndPassword(email, password)
    .then(value => {
     console.log('Success', value);
     //this.router.navigateByUrl('/profile');
    })
    .catch(error => {
      console.log('Something went wrong: ', error);
    });
  }


  /**
   * Logins with any oauth mechanism
   * @param provider type of login mechanism
   */
   oAuthLogin(provider: firebase.AuthProvider) {
    return this.afAuth
      .signInWithPopup(provider)
      .catch(error => {
      });

  }

  googleLogin() {
    const provider = new GoogleAuthProvider();
    return this.oAuthLogin(provider)
      .then(value => {
        this.rs.navigateHome();
  
   })
    .catch(error => {
      console.log('Something went wrong: ', error);
    });
  }

  logout() {
    this.afAuth.signOut();
  }


  getUserID(): string {
    return this.currentUserID;
  }


  

  isLoggedIn(): boolean {
    return this.loggedIn;
  }


}
