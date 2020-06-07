import { NgModule } from '@angular/core';
import { NgBootstrapDarkmodeComponent } from './ng-bootstrap-darkmode.component';
import { DarkSwitchComponent } from './dark-switch/dark-switch.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    NgBootstrapDarkmodeComponent,
    DarkSwitchComponent,
  ],
  imports: [
    FormsModule,
  ],
  exports: [
    NgBootstrapDarkmodeComponent,
    DarkSwitchComponent,
  ]
})
export class NgBootstrapDarkmodeModule { }
