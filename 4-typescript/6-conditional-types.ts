// This is called "type manipulation":
https://www.typescriptlang.org/docs/handbook/2/types-from-types.html

// We already saw Generics, 'extends' restriction, keyof, indexed access type
// Let's proceed exploring the ways of creating types out of existing types:

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
