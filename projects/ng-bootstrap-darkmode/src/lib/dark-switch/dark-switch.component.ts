import {Component, OnInit} from '@angular/core';

import {Subject} from 'rxjs';

import {ThemeService} from '../theme.service';

@Component({
  selector: 'ng-bootstrap-darkmode-switch',
  templateUrl: './dark-switch.component.html',
  styleUrls: ['./dark-switch.component.scss'],
})
export class DarkSwitchComponent implements OnInit {
  theme$: Subject<string | null>;

  constructor(
    private themeService: ThemeService,
  ) {
  }

  ngOnInit() {
    this.theme$ = this.themeService.theme$;
  }
}
