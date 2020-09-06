# NgBootstrapDarkmode

<p align="center">

[![npm version](https://badge.fury.io/js/ng-bootstrap-darkmode.svg)](https://badge.fury.io/js/ng-bootstrap-darkmode)
![Node.js CI](https://github.com/Clashsoft/ng-bootstrap-darkmode/workflows/Node.js%20CI/badge.svg)

</p>

An Angular wrapper for [bootstrap-darkmode](https://github.com/Clashsoft/bootstrap-darkmode).

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

Include the theme switcher, which allows selections between light, dark and automatic (user agent preference) mode:

```html
<ng-bootstrap-theme-switch></ng-bootstrap-theme-switch>
```

The theme switcher can be customized with the optional `[size]` and `[style]` attributes:

```html
<ng-bootstrap-theme-switch size="sm"></ng-bootstrap-theme-switch>
<ng-bootstrap-theme-switch size="md"></ng-bootstrap-theme-switch>
<ng-bootstrap-theme-switch size="lg"></ng-bootstrap-theme-switch>
<ng-bootstrap-theme-switch [size]="userPrefersLargeElements ? 'lg' : 'md'"></ng-bootstrap-theme-switch>

<ng-bootstrap-theme-switch style="icon"></ng-bootstrap-theme-switch>
<ng-bootstrap-theme-switch style="label"></ng-bootstrap-theme-switch>
<ng-bootstrap-theme-switch [style]="userPrefersLabelsOverIcons ? 'label' : 'icon'"></ng-bootstrap-theme-switch>
```

An outdated alternative is the dark mode switch, which does not support automatic mode:

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
