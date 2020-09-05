# NgBootstrapDarkmode

An Angular wrapper for [bootstrap-darkmode](https://github.com/Clashsoft/bootstrap-darkmode).
Provides the `DarkSwitchComponent` and `ThemeService`.

## Installation

Install the module:

```sh
$ npm install ng-bootstrap-darkmode bootstrap-darkmode
```

Include darkmode css (in `styles.scss`):

```scss
@import "~bootstrap-darkmode/darktheme";
```

Alternatively, if you are not using SCSS, add the following in `angular.json` under `projects.<yourProject>.architect.build.options.styles`:

```json5
"styles": [
  // ...
  "../node_modules/bootstrap-darkmode/dist/darktheme.css"
]
```

## Usage

Import the module:

```typescript
import {NgBootstrapDarkmodeModule} from 'ng-bootstrap-darkmode';

@NgModule({
  imports: [
    // ...
    NgBootstrapDarkmodeModule,
  ],
  // ...
})
export class AppModule {
}
```

Include the dark mode switch:

```html
<ng-bootstrap-darkmode-switch></ng-bootstrap-darkmode-switch>
```

Subscribe to theme changes:

```typescript
import {ThemeService} from 'ng-bootstrap-darkmode';

@Injectable()
export class MyService {
  constructor(
    themeService: ThemeService,
  ) {
    themeService.theme$.subscribe(theme => console.log(theme));
  }
}
```
