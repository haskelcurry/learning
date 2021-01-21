// 15m on everything
//
// You must have noticed that all this time we didn't use OOP. At all.
// There was logic, some could say pretty non-trivial, interactive functionality. 
// But no classes. How could that be?

// It looks like we can build our modern complex UI apps without OOP...  
// How's that possible? Why then we learn OOP in universities? Why we learn Design Patterns, OOD?
// Why not just use simple functions?

// The short answer is: because of terrible misunderstanding!

// Classes vs true OOP
https://en.wikipedia.org/wiki/JavaScript#Creation_at_Netscape
// Self, the true OOP with Prototypal inheritance

class UserDTO {
  id: string;
  name: string;
  surname: string;
  age: number;
  isAdmin: boolean;

  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.surname = data.surname;
    this.age = data.age;
    this.isAdmin = data.permissions?.admin;
  }

  getFullName() {
    return `${this.name} ${this.surname}`;
  }
}


const user = new UserDTO(data);

backend.getUser().subscribe(result: UserDTO => ...);


//=======================================

// Now... How does "new" work?
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new

function userDTO(data) {
  return {
    id: data.id,
    name: data.name,
    surname: data.surname,
    age: data.age,
    isAdmin: data.permissions?.admin
  }
}

// Behavior is separated out from the data structure.
// Coupling data structure and behavior in class-based OOP is the TIGHTEST coupling possible.
function getUserFullName(user) {
  return `${user.name} ${user.surname}`;
}

type UserDTO = {
  id: string;
  name: string;
  surname: string;
  age: number;
  isAdmin: boolean;
}

// I hope that you all have read the "Design Patterns" by GoF. There they have 2 main statements:
// “Program to an interface, not an implementation,” and “favor object composition over class inheritance.”
// But:
// - Child classes code to the implementation of the parent class
// - Class-based OOP is ALWAYS class inheritance!


// Gorilla / Banana Problem
// Fragile Base Class Problem
// etc.


//=======================================

// What about the inheritance in Prototypal OOP? OLOO!
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create



const person = {
  isHuman: false,
  printIntroduction: function() {
    console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
  }
};

const me = Object.assign(Object.create(person), {
  name: 'Matthew', // "name" is a property set on "me", but not on "person"
  isHuman: true    // inherited properties can be overwritten
});

me.printIntroduction();
// expected output: "My name is Matthew. Am I human? true"




// Or mere extend!

class Animal {
  alive = true;
}

class Insect extends Animal {
  bites = true;
}

class Spider extends Insect {
  legs = 8;
}

class Hero {
  cool = true;
}

class Spiderman extends Hero, ???
// The Diamond problem ^^^



const animal = {alive: true};
const insect = {...animal, bites: true};
const spider = {...insect, legs: 8};

// 'Inherit' from two sources
const hero = {cool: true};
const spiderman = {...spider, ...hero};



// In short, ALL OBJECT HIERARCHIES ARE EVENTUALLY WRONG FOR NEW USE CASES.


// Another great example:
// https://webdriver.io/docs/pageobjects.html
//
// export const Page = {
//   title: 'My Page',
//   open: path => browser.url(path)
// };

// export const LoginPage = {
//   ...Page,
//   username: () => $('#username'),
//   ...
// };


// I don't say that you shouldn't use classes.
// It's OK to use them, but be aware why you do it and know your alternatives.
// Keep it simple!
// Think about it: do you REALLY need classes in your case?
//
// Actually you can successfully combine FP and OOP in JS, as for example Angular does.
// In other technologies, there is brilliant Scala language that uses the same approach.
// So, there is a sweet spot between FP and OOP that can be achieved.
//
// Keep in mind tho, that modern UI libs such as React and Vue are getting rid of classes, not without a reason.
// Let's try and write our own UI lib now.
//
// 2h
