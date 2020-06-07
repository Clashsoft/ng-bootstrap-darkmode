import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private _theme = new BehaviorSubject<string | null>(null);

  constructor() {
  }

  get theme$(): Observable<string> {
    return this._theme;
  }

  get theme(): string | null {
    return this._theme.getValue();
  }

  set theme(value: string | null) {
    this._theme.next(value);
  }
}
