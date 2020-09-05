import {Component, Input, OnInit} from '@angular/core';

import {ThemeService} from '../theme.service';
import {Subject} from 'rxjs';

@Component({
  selector: 'ng-bootstrap-theme-switch',
  templateUrl: './theme-switch.component.html',
  styleUrls: ['./theme-switch.component.scss']
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
