import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { RegisterpageComponent } from './registerpage/registerpage.component';
import { WorkshoppageComponent } from './workshoppage/workshoppage.component';
import { HomePageComponent } from './homepage/homepage.component';
import { EventHomeComponent } from './event-home/event-home.component';
import { UserProfileComponent } from './profilepage/user-profile.component';
import { EventAdminComponent } from './event-admin/event-admin.component';
import { EventsAdminComponent } from './events-admin/events-admin.component';
import { EventsHomeComponent } from './events-home/events-home.component';
import { DevFormsComponent } from './dev-forms/dev-forms.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginpageComponent},
  { path: 'register', component: RegisterpageComponent},
  { path: 'workshops', component: WorkshoppageComponent},
  { path: 'home', component: HomePageComponent},
  { path: 'events/admin', component: EventsAdminComponent },
  { path: 'events/admin/:id', component: EventAdminComponent},
  { path: 'events', component: EventsHomeComponent},
  { path: 'events/:id', component: EventHomeComponent},
  { path: 'profile', component: UserProfileComponent},
  { path: 'events/:id/register', component: RegisterpageComponent },
  { path: 'dev/forms', component: DevFormsComponent }

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
