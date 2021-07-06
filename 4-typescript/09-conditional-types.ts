// What we did just now is called "type manipulation":
https://www.typescriptlang.org/docs/handbook/2/types-from-types.html

// We already saw Generics, 'extends' restriction, keyof, typeof, indexed access types...
// Let's proceed exploring the ways of creating types out of existing types.

https://www.typescriptlang.org/docs/handbook/2/conditional-types.html
// (read starting from "For example, let’s take the following createLabel function:")

type IdLabel = {id: number};
type NameLabel = {name: string};
type NameOrId<T extends number | string> = T extends number
  ? IdLabel
  : NameLabel;

function createLabel<T extends number | string>(nameOrId: T): NameOrId<T> {
  throw "unimplemented";
}

let label = createLabel('test');

// So, if we pass string, the returning type would be NameLabel,  if we pass number -- IdLabel
// Let's have another example to make it clear:

type Admin = 'Admin';
type Customer = 'Customer';
type UserType = Admin | Customer;

type FullAccess = 'FullAccess';
type ViewOnly = 'ViewOnly';
type Permission<T extends UserType> = T extends Admin
  ? FullAccess
  : ViewOnly;

function getUserPermission<T extends UserType>(type: T): Permission<T> {
  throw "unimplemented";
}

const permission = getUserPermission('Admin');


// ==>  (note the string literal types)


type Admin = {adminId: string};
type Customer = {customerId: string};
type UserType = Admin | Customer;

type FullAccess = {level: 'full'};
type ViewOnly = {level: 'view'};
type Permission<T extends UserType> = T extends Admin
  ? FullAccess
  : ViewOnly;

function getUserPermission<T extends UserType>(type: T): Permission<T> {
  throw "unimplemented";
}

const admin: Admin = {adminId: '1234'};
const permission = getUserPermission(admin);

// Couple of more neat tricks:
https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#conditional-type-constraints
// (proceed to Inferring)
// "Here, we used the infer keyword....."
// > Distributive Conditional Types   well, this works the same for union types

// One last cool trick with conditions, and we'll proceed to other kinds of type manipulation:
function count<T>(list: T extends any[] ? T : 'Only arrays please'): unknown {
  return list.length;
}
count('test')

// I saw this used quite often in the source code of enterprise-grade libraries like NgRx:
https://github.com/ngrx/platform/blob/7c6d4e4c188ed24fa74e527c6701b2a98913b035/modules/store/src/models.ts#L83
