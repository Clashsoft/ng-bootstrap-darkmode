import { NgModule } from '@angular/core';
import { NgBootstrapDarkmodeComponent } from './ng-bootstrap-darkmode.component';
import { DarkSwitchComponent } from './dark-switch/dark-switch.component';



@NgModule({
  declarations: [
    NgBootstrapDarkmodeComponent,
    DarkSwitchComponent,
  ],
  imports: [
  ],
  exports: [
    NgBootstrapDarkmodeComponent,
    DarkSwitchComponent,
  ]
})
export class NgBootstrapDarkmodeModule { }
