function isValidPassword(str) {
  return str.length > 8 &&
    /?=.*\d/.test(str) &&
    /?=.*[a-z]/.test(str) &&
    /?=.*[A-Z]/.test(str);
}




















// function isValid(password) {
//   const lengthIsValid = password.length > 8;
//   const containsNumbers = /?=.*\d/.test(password);
//   const containsLowercase = /?=.*[a-z]/.test(password);
//   const containsUppercase = /?=.*[A-Z]/.test(password);

//   return every([
//     lengthIsValid,
//     containsNumbers,
//     containsLowercase,
//     containsUppercase
//   ]);
// }
