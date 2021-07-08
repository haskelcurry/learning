// Ok, more tricks. First of all, the literal types:
https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-types

// Now,

type VerticalAlignment = 'top' | 'middle' | 'bottom';
type HorizontalAlignment = 'left' | 'center' | 'right';

declare function setAlignment(value: `${VerticalAlignment}-${HorizontalAlignment}`): void;

type AllPossible = `${VerticalAlignment}-${HorizontalAlignment}`;

// Don't be afraid of using the string literal types _directly_.
// While it might feel non-DRY / non-safe to use strings directly in your code, 
// and you got used to extract your strings in constants 
// somewhere on top of your file...
// ...with types, the situation is different: they are _typechecked_ for you, 
// just like the variable names. There is no way you can mistake
// 
// Another reason is: it's very powerful:
https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html
https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html#string-unions-in-types

// And there are even some utility functions:
https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html#intrinsic-string-manipulation-types


// 2:15
