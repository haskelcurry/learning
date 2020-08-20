// WRONG!
this._name = ...;
this.pName = ...;


// WRONG!
class SomeService implements ISomeService {
  ...
}


// RIGHT
this.name = ...;


class SomeSpecificService implements BackendService {
}
