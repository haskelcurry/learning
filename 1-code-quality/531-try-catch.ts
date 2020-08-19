try {
  this.loadData();
} catch(e) {
  this.cancel();
  console.error(e);
}







// const data = this.loadData()
//   .then(result => ...)
//   .catch(e => {
//     this.cancel();
//     console.error(e);
//   });









// "then" is "map"
// Functors, Monads


// https://evojam.com/technology-blog/2016/03/21/practical-intro-to-monads-in-javascript-either
//
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
