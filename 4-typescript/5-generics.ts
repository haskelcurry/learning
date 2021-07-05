////////////////////
post<T>(...): Observable<T> {
////////////////////

function identity(arg: number): number {
  return arg;
}

function identity(arg: any): any {
  return arg;
}

function identity<T>(arg: T): T {
  return arg;
}

type Animal = {legs: number};
type Dog = Animal & {breed: string};
type Car = {speed: number};

function addLeg<T extends Animal>(animal: T): T {
  return {...animal, legs: animal.legs +1};
}

const dog: Dog = {legs: 4, breed: 'Husky'};
addLeg(dog);
const car: Car = {speed: 9000};
addLeg(car);

// So we say: this function should take a type that is Animal, and returns the same type.
// (we don't know which exactly)
// It's a type variable


function concat<T>(what: Array<T>, and: Array<T>): Array<T> {
  return what.concat(and);  // try with 1 and 'test'
}
// Because we don't know if T is a number or string, and can't guarantee type safety
concat([1], ['test']);

// But we can force it! We can manually specify the generic type:
concat<any>([1], ['test']);
concat<string>([1], ['test']);
concat<number | string>([1], ['test']);




function getLength(ofWhat: string): number {
  return ofWhat.length;
}

getLength('test');

// string | Array<any> | ???

const train = {length: 120};

function getLength(ofWhat: {length: number}): number {
  return ofWhat.length;
}
getLength(train);

type HasLength = {length: number};
function getLength<T extends HasLength>(ofWhat: T): number {
  return ofWhat.length;
}

// This is a so-called TYPE CONSTRAINT
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
};

const person: Person = {
  age: 30,
  name: 'John',
};
const name = getProperty(person, 'name');
const name = getProperty(person, 'address');

https://www.typescriptlang.org/docs/handbook/declaration-files/publishing.html
https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/lodash/common/array.d.ts#L37

https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/lodash/common/collection.d.ts#L1219

// Let's figure out what's happening here...
// The case is this:
_.map({a: {nested: 1}, b: {nested: 2}, c: {nested: 3}}, 'nested');
// [1, 2, 3]

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
