import {Routes, RouterModule} from '@angular/router';
import {RegisterComponent} from './views/user/register/register.component';
import {ProfileComponent} from './views/user/profile/profile.component';
import {WebsiteListComponent} from './views/website-list/website-list.component';
import {LoginComponent} from './views/user/login/login.component';
import {WigetListComponent} from './views/widget/wiget-list/wiget-list.component';

const appRoutes: Routes = [
  {path: 'widget', component: WigetListComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'profile/:userId/website', component: WebsiteListComponent},
  {path: 'profile/:userId', component: ProfileComponent}

];

export const routing = RouterModule.forRoot(appRoutes);
