function validateUser(user) {
  if (user.id && user.name && user.enabled) {
    this.valid = true;
  } else {
    this.valid = false;
  }
}








// function validateUser(user) {
//   this.valid = user.id && user.name && user.enabled;
// }









// function validateUser(user) {
//   this.valid = [
//     'id', 'name', 'enabled'
//   ].every(p => user[p]);
// }
