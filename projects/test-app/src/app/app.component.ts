import { Component } from '@angular/core';
import {ThemeService} from 'ng-bootstrap-darkmode';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test-app';

  constructor(
    public themeService: ThemeService,
  ) {
  }
}
