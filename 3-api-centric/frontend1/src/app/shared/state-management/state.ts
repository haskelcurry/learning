import { Observable, BehaviorSubject } from 'rxjs';
import { map, distinctUntilChanged, share } from 'rxjs/operators';
import { environment } from '@environment';

export interface Options {
  rehydrate: boolean;
}

export const defaultOptions = {
  rehydrate: false
};

export class State<T> {
  value$: Observable<T>;
  private _value$: BehaviorSubject<T>;
  private initialValue: T;
  private options: Options;

  protected constructor(initialValue: T, options: Options = defaultOptions) {
    this.options = options;
    if (options.rehydrate) {
      initialValue = this.loadFromLocalStorage() || initialValue;
    }

    this.log(
      `➤ ${this.constructor.name} ${
        options.rehydrate ? 'rehydrated' : 'initialized'
      }:`,
      initialValue
    );

    this._value$ = new BehaviorSubject(initialValue);
    this.value$ = this._value$.asObservable();
    this.initialValue = initialValue;

    (<any>window).states = {
      ...(<any>window).states,
      [this.constructor.name]: this
    };
  }

  get value(): T {
    return this._value$.getValue();
  }

  setValue(value: { [prop: string]: any }): void {
    this._value$.next({
      ...this.value,
      ...value
    });
    this.options.rehydrate && this.saveToLocalStorage();

    this.log(`➤ ${this.constructor.name}:`, this.value);
  }

  select(selector: (state: T) => any) {
    return this.value$.pipe(map(selector), distinctUntilChanged(), share());
  }

  reset() {
    this.setValue(this.initialValue);
  }

  private loadFromLocalStorage(): T {
    const value = localStorage.getItem(this.constructor.name);
    return value ? JSON.parse(value) : null;
  }

  private saveToLocalStorage() {
    localStorage.setItem(this.constructor.name, JSON.stringify(this.value));
  }

  private log(...args) {
    if (environment.production) return;

    console.info('\x1b[32m%s\x1b[0m', ...args);
  }
}
