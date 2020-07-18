import {NgModule} from '@angular/core';
import {DarkSwitchComponent} from './dark-switch/dark-switch.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    DarkSwitchComponent,
  ],
  imports: [
    FormsModule,
  ],
  exports: [
    DarkSwitchComponent,
  ]
})
export class NgBootstrapDarkmodeModule {
}
