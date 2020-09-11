import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NgBootstrapDarkmodeModule, THEME_LOADER, THEME_SAVER} from 'ng-bootstrap-darkmode';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    NgBootstrapDarkmodeModule,
  ],
  providers: [
    {
      provide: THEME_LOADER,
      useValue: () => 'loaded-light',
    },
    {
      provide: THEME_SAVER,
      useValue: (theme) => console.log('saving', theme),
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
