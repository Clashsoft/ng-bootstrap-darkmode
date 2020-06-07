import {Component, OnInit} from '@angular/core';

import {ThemeService} from '../theme.service';

@Component({
  selector: 'ng-bootstrap-darkmode-switch',
  templateUrl: './dark-switch.component.html',
  styleUrls: ['./dark-switch.component.scss']
})
export class DarkSwitchComponent implements OnInit {
  constructor(
    private themeService: ThemeService,
  ) {
  }

  ngOnInit() {
  }

  get enabled(): boolean {
    return this.themeService.theme === 'dark';
  }

  set enabled(value: boolean) {
    this.themeService.theme = value ? 'dark' : 'light';
  }
}
