import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { QuillEditorModule } from 'ngx-quill-editor';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/user/login/login.component';
import { Routing } from './app.routing';
import { RegisterComponent } from './components/user/register/register.component';
import { UserService } from './services/user.service.client';
import { ProfileComponent } from './components/user/profile/profile.component';
import { WebsiteListComponent } from './components/website/website-list/website-list.component';
import { WebsiteNewComponent } from './components/website/website-new/website-new.component';
import {WebsiteService} from './services/website.service.client';
import {WebsiteEditComponent} from './components/website/website-edit/website-edit.component';
import {PageNewComponent} from './components/page/page-new/page-new.component';
import { PageListComponent } from './components/page/page-list/page-list.component';
import { PageEditComponent } from './components/page/page-edit/page-edit.component';
import {PageService} from './services/page.service.client';
import { WidgetNewComponent } from './components/widget/widget-new/widget-new.component';
import { WidgetEditComponent } from './components/widget/widget-edit/widget-edit.component';
import { WidgetListComponent } from './components/widget/widget-list/widget-list.component';
import {WidgetService} from './services/widget.service.client';
import { WidgetYoutubeComponent } from './components/widget/widget-edit/widget-youtube/widget-youtube.component';
import { WidgetHeaderComponent } from './components/widget/widget-edit/widget-header/widget-header.component';
import { WidgetHtmlComponent } from './components/widget/widget-edit/widget-html/widget-html.component';
import { WidgetImageComponent } from './components/widget/widget-edit/widget-image/widget-image.component';
import { WidgetTextComponent } from './components/widget/widget-edit/widget-text/widget-text.component';
import {SafePipe} from './components/widget/widget-list/safe-pipe.pipe';
import {AuthGuard} from './services/auth-gaurd.service';
import {SharedService} from './services/shared.service';
import {SortableDirective} from './components/widget/widget-list/sortable.directive';
import {OrderByPipe} from './components/widget/widget-list/order-by-pipe.pipe';
import { FlickrImageSearchComponent } from './components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component';
import {FlickrService} from './services/flickr.service.client';

// add client side services to providers

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    ProfileComponent,
    WebsiteListComponent,
    WebsiteNewComponent,
    WebsiteEditComponent,
    PageNewComponent,
    PageListComponent,
    PageEditComponent,
    WidgetNewComponent,
    WidgetEditComponent,
    WidgetListComponent,
    WidgetYoutubeComponent,
    WidgetHeaderComponent,
    WidgetHtmlComponent,
    WidgetImageComponent,
    WidgetTextComponent,
    SafePipe,
    SortableDirective,
    OrderByPipe,
    FlickrImageSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Routing,
    QuillEditorModule
  ],
  providers: [UserService, WebsiteService, PageService, WidgetService, AuthGuard, SharedService, FlickrService],
  bootstrap: [AppComponent]
})

export class AppModule {}
