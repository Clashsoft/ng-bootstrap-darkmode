import {Inject, Injectable} from '@angular/core';
import {DOCUMENT} from '@angular/common';

import {BehaviorSubject, fromEvent, Observable, of, Subject} from 'rxjs';
import {map} from 'rxjs/operators';

export type DetectedTheme = 'dark' | 'light';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private _theme = new BehaviorSubject<string | null>(null);

  /**
   * A function that loads the saved theme.
   * Defaults to loading from local storage with the key `theme`.
   */
  loadHandler: () => string | null = () => typeof localStorage !== 'undefined' ? localStorage.getItem('theme') : null;

  /**
   * A function that saves the theme.
   * Defaults to saving to local storage with the key `theme`.
   *
   * @param theme
   *  the theme to save
   */
  saveHandler: (theme: string | null) => void = theme => {
    if (typeof localStorage === 'undefined') {
      return;
    }
    if (theme) {
      localStorage.setItem('theme', theme);
    } else {
      localStorage.removeItem('theme');
    }
  };

  constructor(
    @Inject(DOCUMENT) document: any,
  ) {
    this._theme.next(this.savedTheme ?? this.detectedTheme);
    this._theme.subscribe(theme => {
      if (theme) {
        document.body.setAttribute('data-theme', theme);
      } else {
        document.body.removeAttribute('data-theme');
      }
    });
    this._theme.subscribe(theme => this.savedTheme = theme);
  }

  /**
   * @return a subject representing the currently active theme
   */
  get theme$(): Subject<string | null> {
    return this._theme;
  }

  /**
   * @return `dark` if the user agent prefers dark color scheme, `light` otherwise
   */
  get detectedTheme(): DetectedTheme {
    return typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  /**
   * @return an observable version of {@link detectedTheme} that automatically updates on changes, e.g. when the user
   * changes their operating system theme preference, or it switches depending on day/night.
   */
  get detectedTheme$(): Observable<DetectedTheme> {
    if (typeof window === 'undefined') {
      return of('light');
    }
    return fromEvent<MediaQueryListEvent>(window.matchMedia('(prefers-color-scheme: dark)'), 'change').pipe(
      map(event => event.matches ? 'dark' : 'light'),
    );
  }

  /**
   * @return the current theme
   */
  get theme(): string | null {
    return this._theme.getValue();
  }

  /**
   * @param value
   *  the new theme
   */
  set theme(value: string | null) {
    this._theme.next(value);
  }

  /**
   * @return the saved theme, using {@link loadHandler}
   */
  get savedTheme(): string | null {
    return this.loadHandler();
  }

  /**
   * @param theme
   *  the theme to save using {@link saveHandler}
   */
  set savedTheme(theme: string | null) {
    this.saveHandler(theme);
  }
}
