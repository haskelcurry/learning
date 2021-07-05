class Animal {
  legs: number;

  constructor(legs: number) {
    this.legs = legs;
  }
}

// The property can be private, public, protected. It's a so-called "encapsulation"
// static, readonly
// I can override, I can overload it:
class Animal {
  getLegs() {
    return this.legs;
  }
}

class Cat extends Animal {
  private lives = 9;

  getLegs() {
    return 4;
  }
  getLives(): number;
  getLives(arg?: boolean): number {
    return this.lives;
  }
}

// Now let's write some functions:

function see(what: Animal): void {
  console.log(`I see the animal with ${what.legs} legs`);
}

const animal = new Animal(4);
see(animal);

// ...Aand have some more animals
class Dog extends Animal {
  private breed: string;

  constructor(breed: string) {
    super(4);
    this.breed = breed;
  }
};
const dog = new Dog('Corgi');
see(dog);





// We could also do it like this:
interface Animal { // Animal is an interface now
  legs: number
};

class Dog implements Animal {
  legs = 4;
  breed: string;

  constructor(breed: string) {
    this.breed = breed;
  }
}

class Corgi extends Dog { // implements Animal
  constructor() {
    super('Corgi');
  }
}

const corgi = new Corgi();
see(corgi);

class Human implements Animal {
  legs = 2;
}

const human = new Human();
see(human);



// Now... there's a lot of structure, isn't it?
// This is connected to this, this one is private, this calls "super", this is overridden,
// this inherits this, this implements an interface, etc.
// And it's a very basic structure so far: animal, cat, dog, human...


// Now, let's start from scratch and have another look, without using class-based OOP:
// (keep the "see" fn)
type Animal = { // type. We no longer need to grasp on OOP concepts
  legs: number;
};

type DogBreed = 'Corgi' | 'Husky';

type Dog = Animal & {
  breed: DogBreed;
};

const corgi: Dog = {legs: 4, breed: 'Corgi'};
const human: Animal = {legs: 2};

// We could have the factories to create instances:
const createAnimal = (legs: number): Animal => ({legs});
const createDog = (breed: DogBreed): Dog => ({...createAnimal(4), breed});

const corgi_: Dog = createDog('Corgi');
const human_: Animal = createAnimal(2);

console.log(corgi_);
see(corgi_);

// Same thing, works the same way, does the same thing.
// But hey, it's up to you to decide whether to USE oop, fp, something in the middle, or anything else.
// Still, you can see that there is more "general" way to define a type.

// So, what exactly is the difference between the 'type' and 'interface'?
// Conceptual difference is that interface is an OOP concept, while type is as a type in FP
// Let's have a closer look at the TECHNICAL difference now:
