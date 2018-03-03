import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SortableDirective } from './sortable.directive';
import { HelloWorldDirective } from './hello-world.directive';
import { TestDirective } from './test.directive';


@NgModule({
  declarations: [
    AppComponent,
    SortableDirective,
    HelloWorldDirective,
    TestDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
