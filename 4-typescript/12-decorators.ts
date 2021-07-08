// https://www.typescriptlang.org/docs/handbook/decorators.html
//
// Let's quickly write our own decorator:
//
//
function log(config: {error: boolean}) {  
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    // console.log(target, propertyKey, descriptor);

    const targetMethod = descriptor.value;
    descriptor.value = function(...args: any[]) {
      const result = targetMethod.apply(this);
      console.log(`Result is: ${result}`);
      return result;
    };
  };
}

class Animal {
    legs: number;

    constructor(legs: number) {
        this.legs = legs;
    }
    
    @log({error: true})
    getLegs() {
        return this.legs;
    }
}

const dog = new Animal(4);
const legs = dog.getLegs();

// (scroll down Decorators till the end)
// Decorators are still experimental, but there's already an enhancement awaiting:
// "However, once decorators are officially adopted as part of the ECMAScript standard 
// these extensions will be proposed for adoption."
// https://github.com/rbuckton/reflect-metadata
// (show example)
// _in the runtime_


// 2:40
