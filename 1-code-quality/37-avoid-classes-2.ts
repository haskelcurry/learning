// Inheritance? OLOO!
//
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create

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
const animal = {alive: true};
const insect = {...animal, bites: true};
const spider = {...insect, legs: 8};

// 'Inherit' from two sources
const hero = {cool: true};
const spiderman = {...spider, ...hero};





// GoF:
// “Program to an interface, not an implementation,” and “favor object composition over class inheritance.”
// But:
// - Child classes code to the implementation of the parent class
// - Class-based OOP is ALWAYS class inheritance!


// Gorilla / Banana Problem
// Diamond Problem
// Fragile Base Class Problem
// etc.


// In short, ALL OBJECT HIERARCHIES ARE EVENTUALLY WRONG FOR NEW USE CASES.


// https://medium.com/javascript-scene/common-misconceptions-about-inheritance-in-javascript-d5d9bab29b0a
// https://medium.com/javascript-scene/the-two-pillars-of-javascript-ee6f3281e7f3
// https://medium.com/@cscalfani/goodbye-object-oriented-programming-a59cda4c0e53
// https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/this%20&%20object%20prototypes/README.md#you-dont-know-js-this--object-prototypes
