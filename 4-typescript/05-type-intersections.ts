// First of all, you can make type aliases for existing types, even primitives, like we did before:
type ClinicId = string;
// it's impossible with interfaces:
interface ClinicId {}

// Or like this:
function getCurrentLevel(): number {}
type Level = number;


// Or
function getUsers(): Promise<any> {// We don't know what BE's gonna return}
type UsersResponse = any;

// Of course, we should better find out WHAT BE's response type :)
type User = {name: string};




// Another technical difference is how members with the same property key are handled when present in both types:
interface Shape {
  area: number;
}
interface Square extends Shape {
  area: string;
}
// incompatible!

type ShapeT = {
  area: number;
}
type SquareT = ShapeT & {
  area: string;
}

// Note that conceptually it's not even inheritance. The types are not as closely dependent in intersations as interfaces in extension, it's in a way _loosely coupled_ type combination.

// Here's another interesting difference. Interfaces are open-ended.
// New definitions can be added anywhere because multiple interface declarations with same name in the same declaration space are merged.
interface A {id: string};
interface A {name: string};

const a: A = {id: '11', name: 'name'};

type B = {id: string};
type B = {name: string};

// Let's say I want to add something to existing defition of the Arrays:
interface Array<T> {
  slurp(f: (x: T) => T): T[];
}

[1, 2].slurp(x => x);

// And that's actually how it works in libraries like Lodash and Ramda:
// There is a lib.d.ts declaration file loaded, which adds stuff on top of existing declarations.
// Same for the polyfills:
array-flat-map-polyfill.ts

interface Array<T> {
  flatMap<R>(f: (x: T) => R[]): R[];
}

...

// And that's how you can augment typings of any 3rd party library that you use.
//
// This is actually a feature of TS, called Declaration Merging:
// https://www.typescriptlang.org/docs/handbook/declaration-merging.html
//
// And that's a good point to talk about the declaration files.
// https://www.typescriptlang.org/docs/handbook/declaration-files/introduction.html
// "The most common case for learning how .d.ts files work is that you’re typing an npm package with no types."
https://www.typescriptlang.org/docs/handbook/declaration-files/publishing.html
// (open node_modules)
const { resolve } = require('path');
// refactor-me/@types/node
https://www.typescriptlang.org/docs/handbook/modules.html
https://www.typescriptlang.org/docs/handbook/modules.html#code-generation-for-modules
https://www.typescriptlang.org/docs/handbook/modules.html#working-with-other-javascript-libraries

https://www.typescriptlang.org/docs/handbook/namespaces.html
https://www.typescriptlang.org/docs/handbook/namespaces.html#splitting-across-files
// So, you see, the 'global extension' idea is similar to interfaces.

// Most of the time, you DON'T need this tho.



// So! Type intersections....  (clear evetything)
type Animal = {legs: number};
type Dog = Animal & {breed: string};
type Spider = Animal & {venomous: boolean};
type Human = Animal & {nationality: string};
type Spiderman = Human & Spider;
// We're basically creating new types from the existing ones, very convenient.


// Here's a practical example:


function getUsers(): Array<UserDTO/*& {selected: boolean}*/> {
  return backend
    .loadUsers()
    .then(map((u: UserDTO) => ({...u, selected: false})));
}

// type UserVM = UserDTO & {selected: boolean};
