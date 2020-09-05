import {Component, OnInit} from '@angular/core';

import {ThemeService} from '../theme.service';
import {Subject} from 'rxjs';

@Component({
  selector: 'ng-bootstrap-darkmode-switch',
  templateUrl: './dark-switch.component.html',
  styleUrls: ['./dark-switch.component.scss']
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
