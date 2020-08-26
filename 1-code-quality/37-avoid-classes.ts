// Classes are Mental Noise!
// Classes vs true OOP
// Self
// It's OK to use them, but be aware why you do it and know alternatives.
// Also on KE / PeeX, of course :)

export class UserDTO {
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



// MENTAL NOISE!


// How does "new" work?







// function userDTO(data) {
//   return {
//     id: data.id,
//     name: data.name,
//     surname: data.surname,
//     age: data.age,
//     isAdmin: data.permissions?.admin
//   }
// }

// function userDTO({id, name, surname, age, permissions}) {
//   return {
//     id,
//     name,
//     surname,
//     age,
//     isAdmin: permissions?.admin
//   }
// }

// function getUserFullName(user) {
//   return `${user.name} ${user.surname}`;
// }

// type UserDTO = {
//   id: string;
//   name: string;
//   surname: string;
//   age: number;
//   isAdmin: boolean;
// }





// GoF:
// “Program to an interface, not an implementation,” and “favor object composition over class inheritance.”
// But:
// - Child classes code to the implementation of the parent class
// - Class-based OOP is ALWAYS class inheritance!


// Gorilla / Banana Problem
// Diamond Problem
// Fragile Base Class Problem
// etc.
