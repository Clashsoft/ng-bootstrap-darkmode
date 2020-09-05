import {NgModule} from '@angular/core';
import {DarkSwitchComponent} from './dark-switch/dark-switch.component';
import {FormsModule} from "@angular/forms";
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    DarkSwitchComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    DarkSwitchComponent,
  ]
})
export class NgBootstrapDarkmodeModule {
}
