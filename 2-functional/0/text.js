42;

var half = x => x / 2;
var plus1 = x => x + 1;
var half_o_plus1 = x => plus1(half(x));
plus1_o_Negate(42);

// Categories
// https://en.wikipedia.org/wiki/Pure_function

var negate = x => -1 * x;
var half_o_plus1_o_Negate = x => negate(plus1(half(x)));
half_o_plus1_o_Negate(42);

var half_o_plus1_o_Negate = _.compose(negate, plus1, half);
half_o_plus1_o_Negate(42);

var half_o_plus1_o_Negate = _.pipe(half, plus1, negate);


RxJS pipe / lettable operators
https://github.com/masaeedu/RxJS/blob/master/doc/lettable-operators.md


var userId = 42;
userId -> url -> HTTPRequest -> HTTPResponse -> json -> email
===
userId -> email


var getUrl = userId => `https://reqres.in/api/users/${userId}`;

// Now...

function httpGet(url, callback) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = () => { 
    xmlHttp.readyState == 4 && 
    xmlHttp.status == 200 &&
      callback(xmlHttp.responseText);
  }
  xmlHttp.open('GET', theUrl, true); // true for asynchronous 
  xmlHttp.send(null);
}

let email;
pipe(getUrl, httpGet(pipe(toJson, email))); // ???

// Functor: Value + Context
// Arrays are Functors (kinda)
// Let's make our own Functor!
var F = v => ({
  map: fn => F(fn(v))
});
// Monads
// Arrays are Monads (kinda)     Very useful! How? Later on that!
x => [x]
  .map(half)
  .map(plus1)
  .map(negate)[0];
// flatMap() for Arrays

// Our own Monad!
var M = v => ({
  map: fn => M(fn(v)),
  flatMap: fn => fn(v)
});

M(42)
  .map(x => x + 1)
  .flatMap(x => [x]) // Swapping on other, completely different Monad (Context)
  .map(x => x / 2)
  .filter(x => 21);
// Map and FlatMap give us the power to compose functions that operate on values in different contexts!

// Promises are Monads
var getUrl = userId => `https://reqres.in/api/users/${userId}`;
var fetchUrl = url => fetch(url);
var toJson = data => data.json();
var getEmail = user => user.data.email;

var getEmailByUserId = userId => Promise
  .resolve(userId)
  .then(getUrl)
  .then(fetchUrl) // flatMap / swap on another Promise
  .then(toJson) // again, flatMap / swap on another Promise
  .then(getEmail)
  .catch(e => 'Email unavaliable');

getEmailByUserId(42).then(console.log);
// Note how flatMap() magically applies!

// Memoize!
var getEmailByUserIdMemoized = _.memoize(getEmailByUserId);

// There is no way to get the value OUT of the wrapper
// We can map it, we can log it, etc. but always inside a Monad
// And that's the whole point! It makes the developer _think_ always in terms of current context
// Monad guarantees that it's value is isolated, immutable and safe. 
// Side effects like errors are extracted out. It's just another context: 'there might be an error...'

// With pure function composition, our app starts to resemble the beautiful mathematic equation.
