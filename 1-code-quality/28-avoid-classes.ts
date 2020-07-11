export class UserDTO {
  id: string;
  name: string;
  surname: string;
  age: number;
  isAdmin: boolean;

  constructor(id, name, surname, age = null, isAdmin = false) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.isAdmin = isAdmin;
  }

  getFullName() {
    return `${this.name} ${this.surname}`;
  }
}


new UserDTO(data.id, data.name, data.surname, data.age, data.isAdmin);

backend.getUser().subscribe(result: UserDTO => ...);



// MENTAL NOISE!


// How does "new" work?







// function userDTO({id, name, surname}) {
//   return {
//     id,
//     name,
//     surname,
//     age: null,
//     isAdmin: false
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



// Self
// You Don't Know JS
// GoF
