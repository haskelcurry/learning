class Component {
  @Input()
  set name(val: boolean) {
    this._name = `Mr. ${val}`;
    this.onNameChanged(this._name);
  }

  get name() {
    return this._name;
  }

  private _name;
}








// import { Observable } from 'rxjs';
// import { ObservableInput } from 'observable-input';

// class Component {
//   @ObservableInput() name$: Observable<string>;

//   nameWithPrefix$ = this.name$.pipe(
//     map(name => `Mr. ${name}`),
//     tap(name => this.onNameChanged(name))
//   );
// }



// <div>
//   Hello, {{ name$ | async }}!
//   I meant {{ nameWithPrefix$ | async }}
// </div>





// Mental Noise?

// Angular styleguide recommends to avoid underscore prefix for private props


// INSTANT
// A influences B instantly;
// B derives from A
