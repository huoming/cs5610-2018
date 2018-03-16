import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './views/user/login/login.component';
import { RegisterComponent } from './views/user/register/register.component';


import { ProfileComponent } from './views/user/profile/profile.component';

import {UserService} from './services/user.service.client';
import {WebsiteListComponent} from './views/website-list/website-list.component';
import {routing} from './app.routing';
import {FormsModule} from '@angular/forms';
import {WebsiteServiceClient} from './services/website.service.client';
import {HttpModule} from '@angular/http';
import {WidgetService} from './services/widget.service.client';
import { WigetListComponent } from './views/widget/wiget-list/wiget-list.component';
import { WidgetHeadingComponent } from './views/widget/widget-heading/widget-heading.component';
import { WidgetParagraphComponent } from './views/widget/widget-paragraph/widget-paragraph.component';
import { ToUpperCasePipe } from './pipes/to-upper-case.pipe';
import { WidgetIframeComponent } from './views/widget/widget-iframe/widget-iframe.component';
import { SortableDirective } from './views/sortable.directive';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    WebsiteListComponent,
    WigetListComponent,
    WidgetHeadingComponent,
    WidgetParagraphComponent,
    ToUpperCasePipe,
    WidgetIframeComponent,
    SortableDirective
  ],
  imports: [
    BrowserModule, routing, FormsModule, HttpModule
  ],
  providers: [UserService, WidgetService, WebsiteServiceClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
