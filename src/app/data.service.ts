import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore'
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  constructor(
    private afs: AngularFirestore,
    private afstorage: AngularFireStorage,
    private as: AuthService) { }


  /**
   * Converts an object inot an array
   * @param data data to convert
   */
  convertObjectArray(data: any): any[] {
    return Object.keys(data).map(key => {
      return Object.assign(data[key], { key: key });
    });
  }

  /**
   * Conforms the data object to be safe for storage in firestore
   * @param data data to manipulate
   */
  conformObject(data: any): any {
    return JSON.parse(JSON.stringify(data));
  }



}
