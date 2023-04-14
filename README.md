# NgBootstrapDarkmode - moved to [ngbx](https://github.com/Clashsoft/meanstream/tree/master/libs/ngbx#readme)

[![npm version](https://badge.fury.io/js/ng-bootstrap-darkmode.svg)](https://badge.fury.io/js/ng-bootstrap-darkmode)
[![Node.js CI](https://github.com/Clashsoft/ng-bootstrap-darkmode/workflows/Node.js%20CI/badge.svg)](https://github.com/Clashsoft/ng-bootstrap-darkmode/actions?query=workflow%3A%22Node.js+CI%22)

An Angular wrapper for [bootstrap-darkmode](https://github.com/Clashsoft/bootstrap-darkmode).

## Installation

Install the module:

```sh
$ npm install ng-bootstrap-darkmode bootstrap-darkmode
```

Include darkmode css (in `styles.scss`):

```scss
@import "~bootstrap-darkmode/scss/darktheme";
```

Alternatively, if you are not using SCSS, add the following in `angular.json` under `projects.<yourProject>.architect.build.options.styles`:

```json5
"styles": [
  // ...
  "../node_modules/bootstrap-darkmode/dist/darktheme.css"
]
```

## Usage

### Module Import

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

### Theme Switcher

To include the theme switcher, which allows selections between light, dark and automatic (user agent preference) mode:

```html
<ngbd-theme-switch></ngbd-theme-switch>
```

The theme switcher can be customized with the optional `[size]` and `[style]` attributes:

```html
<ngbd-theme-switch size="sm"></ngbd-theme-switch>
<ngbd-theme-switch size="md"></ngbd-theme-switch>
<ngbd-theme-switch size="lg"></ngbd-theme-switch>
<ngbd-theme-switch [size]="userPrefersLargeElements ? 'lg' : 'md'"></ngbd-theme-switch>

<ngbd-theme-switch style="icon"></ngbd-theme-switch>
<ngbd-theme-switch style="label"></ngbd-theme-switch>
<ngbd-theme-switch [style]="userPrefersLabelsOverIcons ? 'label' : 'icon'"></ngbd-theme-switch>
```

An outdated alternative is the dark mode switch, which does not support automatic mode:

```html
<ngbd-darkmode-switch></ngbd-darkmode-switch>
```

### Subscribing to the Theme

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

### Configuring Persistence

By default, this library persists the currently selected theme using the key `theme` in `localStorage`.
You can customize how this behaviour using dependency injection.
Just provide the `THEME_SAVER` and `THEME_LOADER` functions in your module:

```typescript
import {of} from 'rxjs';

import {NgBootstrapDarkmodeModule, THEME_LOADER, THEME_SAVER} from 'ng-bootstrap-darkmode';

@NgModule({
  imports: [
    // ...
    NgBootstrapDarkmodeModule,
  ],
  providers: [
    {
      provide: THEME_LOADER,
      useValue: () => of('light'),
    },
    {
      provide: THEME_SAVER,
      useValue: (theme) => console.log('saving', theme),
    },
  ],
  // ...
})
export class AppModule {
}
```
