import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

import {DarkSwitchComponent} from './dark-switch/dark-switch.component';
import {ThemeSwitchComponent} from './theme-switch/theme-switch.component';

@NgModule({
  declarations: [
    DarkSwitchComponent,
    ThemeSwitchComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    DarkSwitchComponent,
    ThemeSwitchComponent,
  ],
})
export class NgBootstrapDarkmodeModule {
}
