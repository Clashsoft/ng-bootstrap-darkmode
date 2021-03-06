# v0.1.0 (2020-09-05)

+ Initial Release.

# v0.1.1 (2020-09-05)

* The theme service now sets the correct `<body>` attribute.
* Improved Angular Universal compatibility.

# v0.1.2 (2020-09-05)

+ Added a license.
+ Added additional info to package metadata.

# v0.2.0 (2020-09-05)

+ Added the theme switch component with support for automatic theme.

# v0.3.0 (2020-09-06)

+ Added `ThemeService.detectedTheme$` as an observable version of `detectedTheme`.
+ Added doc comments for all public APIs.
+ Added the selector `ngbd-darkmode-switch` as an alias for `ng-bootstrap-darkmode-switch`.
+ Added the selector `ngbd-theme-switch` as an alias for `ng-bootstrap-theme-switch`.
* The `ThemeService.detectedTheme` property is now strongly typed with literal types.

# v0.4.0 (2020-09-11)

* Loading and saving can now be customized using dependency injection.
* The `ThemeService.detectedTheme$` observable now starts with the initial media query result.

# v0.5.0 (2021-07-08)

+ The default `ThemeLoader` now watches for changes to LocalStorage. #2
* Updated to Angular 12.
* Made `ThemeLoader` an `Observable`. #2
- The `ThemeService` no longer auto-detects the theme.
- Removed the `ThemeService.savedTheme` and `loadedTheme` properties. #2
