public someMethod() {
  ...
  this.prop = this.generateSomething();
  this.prop2 = this.generateSomethingElse(this.prop);
  this.action2();
  this.action3();
  ...
}

public someOtherMethod() {
  ...
  this.prop = this.generateSomething();
  this.prop2 = this.generateSomethingElse(this.prop);
  this.action2();
  this.action3();
  ...
}




// DRY PICTURE
