export class EntityDTO {
  __type: string;
}

export class UserDTO extends EntityDTO {
  id: string;
  name: string;
  surname: string;

  constructor(name, surname, id) {
    super();
    this.__type = '/com/us/core/model/User';
    this.id = id;
    this.name = name;
    this.surname = surname;
  }
}
