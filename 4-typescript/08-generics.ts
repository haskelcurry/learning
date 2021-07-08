////////////////////
post<T>(...): Observable<T> {
////////////////////
// Let's take an identity function. How would you type it?

function identity(arg: number): number {
  return arg;
}

function identity(arg: any): any {
  return arg;
}

function identity<T>(arg: T): T {
  return arg;
}
// T is a type variable here: we don't know what exactly type there would be,
// but we do know that it should be the same as the returning type
// Let's also write an interface for this function, a _generic interface_:
interface GenericIdentityFn {
  <Type>(arg: Type): Type;
}

let myIdentity: GenericIdentityFn = identity;


// Let's play around with this idea...
type User = {id: number, logged: boolean};
type Admin = User & {level: number};
type Customer = User & {address: string};

function login<T extends User>(user: T): T {
  return {...user, logged: true};
}
// It should take any User and return User _of same type_

const admin: Admin = {id: 1, logged: false, level: 1};
console.log(login(admin));
const guy: Customer = {id: 2, logged: false, address: 'Kyiv'};
console.log(login(guy));

type Car = {speed: number};
const car: Car = {speed: 9000};
console.log(login(car));

// We say: it should take any User and return User _of the same type_
// It's called a type constraint

// Btw, remember our example?
// https://www.typescriptlang.org/play?q=10#example/unknown-and-never
function jsonParserGen<T>(jsonString: string): T {
  return JSON.parse(jsonString);
}
const myOtherAccount = jsonParserGen<User>(`{ "name": "Samuel" }`);


// Ok, another example. The 'concat' function that joins two arrays:
function concat<T>(what: Array<T>, and: Array<T>): Array<T> {
  return what.concat(and);  // try with 1 and 'test'
}
// Yes, Arrays are generics; Promises, Observables, lots of them
concat(...  //  unknown
concat([1], ['test']);

// But we can force it! We can manually specify the generic type:
concat<any>([1], ['test']);
concat<string>([1], ['test']);
concat<number | string>([1], ['test']);


// Ok these were generic functions. Let's have a look at generic classes:
export abstract class State<T> {
  private _value$: BehaviorSubject<T>;
  value$: Observable<T>;

  protected constructor(initialValue: T) {
    this._value$ = new BehaviorSubject(value);
    this.value$ = this._value$.asObservable();
  }

  select<PropType>(selector: (state: T) => PropType): Observable<PropType> {
    return this.value$.pipe(
      map(selector), 
      distinctUntilChanged(), 
      share()
    );
  }
}

export interface AppStateInterface {
  logged: boolean;
}

export const initialState = {
  logged: false;
};

class AppState extends State<AppStateInterface> {
  constructor(initialState, {...});
}

const logged$ = this.appState.select(s => s.logged);

// Another enterprise-grade example, DataSource:
export abstract class AutocompleteDataSource<T> {
  abstract search(term: string, limit: number, offset: number): Observable<T[]>;
}


// Ok, let's get back to generic functions again:
function getLength(ofWhat: string): number {
  return ofWhat.length;
}

getLength('test');

// But not only string could have length. Also arrays, and even custom objects:
const train = {length: 120};

// So, how to make it generic?
function getLength(ofWhat: {length: number}): number {
  return ofWhat.length;
}
getLength(train);

// Or we can write it down like this:
type HasLength = {length: number};
function getLength<T extends HasLength>(ofWhat: T): number {
  return ofWhat.length;
}

// Now let's make more advanced TYPE CONSTRAINT
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
};

const person: Person = {
  age: 30,
  name: 'John',
};
const name = getProperty(person, 'name');
const name = getProperty(person, 'address'); // try wrong



// Let's have a look at more of the real-world generics now.
https://www.typescriptlang.org/docs/handbook/declaration-files/publishing.html
https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/lodash/common/array.d.ts#L37
// (scoll up and down)

https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/lodash/common/collection.d.ts#L1219

// Let's figure out what's happening here...
// The case is this:
_.map({a: {nested: 1}, b: {nested: 2}, c: {nested: 3}}, 'nested');
// [1, 2, 3]
// (show on Lodash site)
//
// https://github.com/lodash/lodash/blob/master/mapObject.js
// Let's take the implementation from the Lodash lib and slightly modify it:
function map<T, K extends keyof T[keyof T]>(object: T, key: K): Array<T[keyof T][K]> {
  const props = Object.keys(object);
  const result = new Array(props.length);

  props.forEach((outerKey, index) => {
    result[index] = object[outerKey][key];
  });
  return result;
}

console.log(
  map({a: {nested: 1}, b: {nested: 2}, c: {nested: 3}}, 'nested') // try wrong prop
);


https://www.typescriptlang.org/docs/handbook/2/keyof-types.html
https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html

{a: {nested: 1}, b: {nested: 2}, c: {nested: 3}}
keyof T = 'a' | 'b' | 'c'; // key names
T[keyof T] = {nested: 1} | {nested: 2} | {nested: 3};
keyof T[keyof T] = 'nested' | 'nested' | 'nested' = 'nested'
K extends keyof T[keyof T] = 'nested';

// So, the key should be THIS,  and the result will be...
Collection<T[keyof T][K]>;
T[keyof T] = {nested: 1} | {nested: 2} | {nested: 3};
T[keyof T][K] = 1 | 2 | 3;
Collection<T[keyof T][K]> = Collection<1 | 2 | 3>;



type T = {a: {nested: 1}, b: {nested: 2}, c: {nested: 3}};
type K1 = keyof T;
type K2 = T[keyof T];
type K3 = keyof T[keyof T];

// Return type:
type K = keyof T[keyof T];
type R1 = T[keyof T];
type R2 = T[keyof T][K];
type R3 = Array<T[keyof T][K]>;


// 1:50
