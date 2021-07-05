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

if (typeof Array.prototype.flatMap !== 'function') {
  Array.prototype.flatMap = function (f) { 
    // Implementation simplified for exposition. 
    return this.map(f).reduce((xs, ys) => [...xs, ...ys], []);
  }
}

// So, interfaces are open-ended, but types are not.
// You can see again, that interfaces are made with the extensibility / inheritance in mind.
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
