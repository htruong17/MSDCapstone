import { FormlyFieldConfig } from '@ngx-formly/core';

/* Basic common shared types */

/**
 * Event location information
 */
export class EventLocation {
  state: string;
  city: string;
  zipcode?: string;
  constructor(state: string, city: string, zipcode?: string) {
    this.state = state;
    this.city = city;
    this.zipcode = this.zipcode;
  }
}

/**
 * Basic date item
 */
export class Dates {
  create: Date = null;
  lastUpdate: Date = null;
  constructor() {
    this.create = new Date();
    this.lastUpdate = this.create;
  }

  /**
   * Updates the timestamps
   */
  update(): Dates {
    this.create = (!this.create) ? this.create : new Date();
    this.lastUpdate = new Date();
    return this;
  }

  /**
   * Compares to see if object was updated
   * Requires that individual calls update accordingly when modifying
   * @param newDate date to compare
   */
  compare(newDate: Date) {
    return (newDate === this.lastUpdate);
  }

  convertDates() {
    return {
      create: new Date(this.create),
      lastUpdate: new Date(this.lastUpdate)
    };
  }
}

/**
 * Special names class to deal with common operations of names
 */
export class Names {
  first: string = null;
  last: string = null;
  middle?: string = null;
  preferred?: string = null;
  display: string = null;
  initials: string = null;
  dates: Dates;

  constructor(first: string, middle: string, last: string, preferred: string) {
    this.dates = new Dates();
    this.update(first, middle, last, preferred);
  }

  /**
   * Udpates someone's name
   * @param first first name
   * @param middle last name
   * @param last last name
   * @param preferred preferred name
   */
  update(first: string, middle: string, last: string, preferred: string): Names {
    this.first = (!first) ? this.first : first.trim().toLowerCase();
    this.middle = (!middle) ? this.middle : middle.trim().toLowerCase();
    this.last = (!last) ? this.last : last.trim().toLowerCase();
    this.preferred = (!preferred) ? this.preferred : preferred.trim().toLowerCase();
    this.display = `${this.first} ${this.last}`;
    this.initials = `${this.first.charAt(0)}${this.last.charAt(0)}`;
    this.dates.update();
    return this;
  }
}

/**
 * Phone number class
 */
export class PhoneNumber {
  country: string;
  area: string;
  prefix: string;
  line: string;
  get e164() {
    const num = this.country + this.area + this.prefix + this.line;
    return `+${num}`;
  }
}

export class EmailPasswordCredentials {
  email: string;
  password: string;
}

export class FormData {
  path: string;
  id: string;
  moduleName: string;
  formName: string;
  checkIn?: any; // @todo refine later
}

export class SocialMedia {
  facebook?: string;
  snapchat?: string;
  instagram?: string;
  twitter?: string;
  qq?: string;
  wechat?: string;
  myspace?: string;
  youtube?: string;

  getAll() {

  }

  addNewSocialMedia() {

  }
}

