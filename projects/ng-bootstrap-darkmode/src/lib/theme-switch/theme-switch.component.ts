import {Component, Input, OnInit} from '@angular/core';

import {Subject} from 'rxjs';

import {ThemeService} from '../theme.service';

@Component({
  selector: 'ng-bootstrap-theme-switch',
  templateUrl: './theme-switch.component.html',
  styleUrls: ['./theme-switch.component.scss'],
})
export class ThemeSwitchComponent implements OnInit {
  theme$: Subject<string | null>;

  @Input() size?: 'sm' | 'md' | 'lg';
  @Input() style?: 'icon' | 'label';

  constructor(
    private themeService: ThemeService,
  ) {
  }

  ngOnInit() {
    this.theme$ = this.themeService.theme$;
  }
}
