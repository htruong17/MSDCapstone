import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUppageComponent } from './sign-uppage/sign-uppage.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { RegisterpageComponent } from './registerpage/registerpage.component';
//import { ProfileComponent } from './profile/profile.component';
//import { EmailComponent } from './email/email.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginpageComponent},
  // //{ path: 'email-login', component: EmailComponent },
  // { path: 'signup', component: SignUppageComponent },
  // //{ path: 'profile', component: ProfileComponent }
  { path: 'register', component: RegisterpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
