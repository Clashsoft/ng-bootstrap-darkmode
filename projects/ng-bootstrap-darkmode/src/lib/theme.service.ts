import {Inject, Injectable} from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';
import {DOCUMENT} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private _theme = new BehaviorSubject<string | null>(null);

  loadHandler: () => string | null = () => typeof localStorage !== 'undefined' ? localStorage.getItem('theme') : null;
  saveHandler: (theme: string | null) => void = theme => {
    if (typeof localStorage === 'undefined') {
      return;
    }
    if (theme) {
      localStorage.setItem('theme', theme);
    } else {
      localStorage.removeItem('theme');
    }
  }

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

  get theme$(): Subject<string | null> {
    return this._theme;
  }

  get detectedTheme(): string {
    return typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  get theme(): string | null {
    return this._theme.getValue();
  }

  set theme(value: string | null) {
    this._theme.next(value);
  }

  get savedTheme(): string | null {
    return this.loadHandler();
  }

  set savedTheme(theme: string | null) {
    this.saveHandler(theme);
  }
}
