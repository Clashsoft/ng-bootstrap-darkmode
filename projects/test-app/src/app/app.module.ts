import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NgBootstrapDarkmodeModule} from 'ng-bootstrap-darkmode';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgBootstrapDarkmodeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
