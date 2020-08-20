// Classes are Mental Noise!
// Classes vs true OOP
// Self

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
