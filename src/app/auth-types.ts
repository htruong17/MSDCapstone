import { Dates, Names, FormData, SocialMedia } from './types';

/**
 * Login methods
 */
export type LoginTypes = 'facebook' | 'phone' | 'email' | 'google' | 'unknown';

/**
 * Current permission types
 */
export type PermissionTypes = 'subscriber' | 'super-admin';

/**
 * Basic user account
 */
export class User {
  id: string;
  active: boolean;
  status: string;
  name: Names;
  socialMedia?: SocialMedia;
  dates: Dates;
  loginMethods: {
    [key: string]: string,
  };
  profilePhoto: string;
  permissions: string [];
  profilePhone?: string;
  // should have a specific email address field
  email: string;
  metadata?: any; // Should restrict later

  /**
   * Creating user
   * @param firstName first name
   * @param lastName last name
   * @param preferredName preferred name
   * @param loginMethod how do they login in (initial, can link later)
   * @param loginData what data is associated with that login method
   * @param orgName organization that they're signing up with
   * @param permissionLevel what is their initial permission level
   */
  constructor(
    id: string,
    firstName: string,
    middleName: string,
    lastName: string,
    preferredName: string,
    loginMethod: LoginTypes,
    loginData: string,
    emailAddress: string,
    permissionLevel: string,
    profilePhoto?: string) {
    this.id = (id) ? id : 'na';
    this.dates = new Dates();
    this.name = this.updateName(firstName, middleName, lastName, preferredName);
    this.loginMethods = {};
    this.loginMethods[loginMethod] = loginData;
    this.permissions = [permissionLevel]; 
    this.email = emailAddress;
    this.profilePhoto = null;
    if (profilePhoto) {
      this.profilePhoto = profilePhoto;
    }
    this.status = 'Pending Email';
    this.active = true;
  }

  

 

  


 
  /**
   * Updates the name object
   * @todo ability to check if inputs are null (if null, don't change)
   * @param firstName first name
   * @param middleName middle name
   * @param lastName last name
   * @param preferredName preferred name
   * @return name object (extra redundancy)
   */
  updateName(firstName: string, middleName: string, lastName: string, preferredName: string) {
    if (!this.name) {
      this.name = new Names(
        firstName.trim().toLowerCase(),
        middleName.trim().toLowerCase(),
        lastName.trim().toLowerCase(),
        preferredName.trim().toLowerCase());
    } else {
      this.name.update(firstName, middleName, lastName, preferredName);
    }
    this.dates.update();
    return this.name;
  }

  
}

