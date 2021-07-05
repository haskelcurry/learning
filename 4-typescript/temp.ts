type Animal = {
  legs: number
};

type Dog = Animal & {breed: string};
type Spider = Animal & {venomous: boolean};
type Human = Animal & {nationality: string};
type Spiderman = Human & Spider;


function getUsers(): Array<UserDTO & {selected: boolean}> {
  return backend
    .loadUsers()
    .then(map((u: UserDTO) => ({...u, selected: false})));
}

type UserVM = UserDTO & {selected: boolean};


------------------

https://www.typescriptlang.org/docs/handbook/2/narrowing.html#discriminated-unions

------------------

Tuples!

-------------------

https://stackoverflow.com/questions/52681316/difference-between-extending-and-intersecting-interfaces-in-typescript

-------------------

type as const 

--------------------



type ArraysAreNotAllowed = 'arrays are not allowed';
type NamePropertyIsNotAllowed = 'name property is not allowed';
type EmptyObjectsAreNotAllowed = 'empty objects are not allowed';

export type NotAllowedCheck<T> = T extends any[]
  ? ArraysAreNotAllowed
  : T extends { name: any }
  ? NamePropertyIsNotAllowed
  : keyof T extends never
  ? EmptyObjectsAreNotAllowed
  : unknown;

function withNotAllowedTypes<T>(something: NotAllowedCheck<T>): NotAllowedCheck<T> {
  return something;
}

withNotAllowedTypes<{type: 555}>(1);



--------------------------



https://dou.ua/forums/topic/33048/

https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-2.html




type VerticalAlignment = 'top' | 'middle' | 'bottom';
type HorizontalAlignment = 'left' | 'center' | 'right';

// Takes
//   | 'top-left'    | 'top-center'    | 'top-right'
//   | 'middle-left' | 'middle-center' | 'middle-right'
//   | 'bottom-left' | 'bottom-center' | 'bottom-right'

declare function setAlignment(value: `${VerticalAlignment}-${HorizontalAlignment}`): void;

setAlignment('top-left');   // works!
setAlignment('top-middel'); // error!

https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-1.html
