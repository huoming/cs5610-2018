/**
 * Created by sesha on 6/2/17.
 */
// Import components
import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {LoginComponent} from './components/user/login/login.component';
import {RegisterComponent} from './components/user/register/register.component';
import {ProfileComponent} from './components/user/profile/profile.component';
import {WebsiteListComponent} from './components/website/website-list/website-list.component';
import {WebsiteNewComponent} from './components/website/website-new/website-new.component';
import {WebsiteEditComponent} from './components/website/website-edit/website-edit.component';
import {PageListComponent} from './components/page/page-list/page-list.component';
import {PageEditComponent} from './components/page/page-edit/page-edit.component';
import {PageNewComponent} from './components/page/page-new/page-new.component';
import {WidgetListComponent} from './components/widget/widget-list/widget-list.component';
import {WidgetNewComponent} from './components/widget/widget-new/widget-new.component';
import {WidgetEditComponent} from './components/widget/widget-edit/widget-edit.component';
import {AuthGuard} from './services/auth-gaurd.service';
import {FlickrImageSearchComponent} from './components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component';

const APP_ROUTES: Routes = [
  {path: '', component : LoginComponent},
  {path: 'login', component : LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
  {path: 'user/website', component: WebsiteListComponent, canActivate: [AuthGuard]},
  {path: 'user/website/new', component: WebsiteNewComponent, canActivate: [AuthGuard]},
  {path: 'user/website/:websiteId', component: WebsiteEditComponent, canActivate: [AuthGuard]},
  {path: 'user/website/:websiteId/page', component: PageListComponent, canActivate: [AuthGuard]},
  {path: 'user/website/:websiteId/page/new', component: PageNewComponent, canActivate: [AuthGuard]},
  {path: 'user/website/:websiteId/page/:pageId', component: PageEditComponent, canActivate: [AuthGuard]},
  {path: 'user/website/:websiteId/page/:pageId/widget', component: WidgetListComponent, canActivate: [AuthGuard]},
  {path: 'user/website/:websiteId/page/:pageId/widget/new', component: WidgetNewComponent, canActivate: [AuthGuard]},
  {path: 'user/website/:websiteId/page/:pageId/widget/:widgetId', component: WidgetEditComponent, canActivate: [AuthGuard]},
  {path: 'user/website/:websiteId/page/:pageId/widget/:widgetId/flickr', component: FlickrImageSearchComponent, canActivate: [AuthGuard]}

];

// Export the routes as module providers
export const Routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
