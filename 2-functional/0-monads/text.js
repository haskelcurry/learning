You all know about the hype around the functional programming recently,  especially in web UI development.
Started by React and especially Redux, popularized by enthusiasts such as Dan Abramov and others.
In Angular they have RxJS which is FRP,  and FRP is based of course on FP.

Although the paradigm appeared more than 80 years ago, long before OOP that became popular in 90s because of Java.
The topic is broad and complex, it's intermingled with mathematics, and you can go very deep in understanding it

Instead, I want to try out the pragmatic approach:  we'll be trying it out in practice and see how it unravels, step by step.

Before we start, let get to know each other.

My name is Markel, I'm an application architect in SoftServe. I work in Web UI development for over 14 years now, involving various technologies:
Java / J2ME, GWT, Android, Flash / Flex, PHP, Scala, Clojure / Clojurescript, Hybrid mobile apps and of course JS.

In Javascript, I went all the way along with the history of SPA development trends:
Prototype → Dojo → YUI → jQuery → ExtJS → GWT → Backbone → Knockout → Angular / React

Now I'd like to know a little bit more about the audience. Let's have a poll now:

Do you use Lodash / Underscore on your project?
  Yes, No

Do you use LodashFP, Ramda or other FP toolbelts?
  Yes, No

Do you use RxJS / Observables?
  Yes, No

Do you use Typescript?
  Yes, No

Do you know what is a pure function?
  Yes, No

// 10 min

42;

var half = x => x / 2;
var plus1 = x => x + 1;

https://en.wikipedia.org/wiki/Function_composition

var half_o_plus1 = x => plus1(half(x));

// (image with ovals and arrows)

https://en.wikipedia.org/wiki/Category_theory

// (draw)

If you think about it, that's what we do in programming all the time:
There's an input, such as the function argument or user input, then some transformation, and then the output: either a return value or HTML / DOM.
And then the cycle continues. But we always have this pattern.

The "transformation" in between the input and output can be either one function, or a combination (composition) of functions.
But for the composition to work as we expect, the functions need to to be PURE, that is, without side effects.

https://en.wikipedia.org/wiki/Pure_function

var negate = x => -1 * x;
var half_o_plus1_o_negate = x => negate(plus1(half(x)));
half_o_plus1_o_negate(42);

var half_o_plus1_o_negate = _.compose(negate, plus1, half);
half_o_plus1_o_Negate(42);

var half_o_plus1_o_negate = _.pipe(half, plus1, negate);

The word "pipe" may be familiar to you. First of all, it's used in UNIX systems to compose the commands:

sudo iwlist wlan0 scan | grep Frequency | sort | uniq -c | sort -n

Also if you use RxJS, you know that the "pipe" was made a mandatory way to compose the operators:
(which are of course pure functions, too)

RxJS pipe / lettable operators
https://github.com/masaeedu/RxJS/blob/master/doc/lettable-operators.md

// 30 min

// Ok now let's move on to more serious examples.


var userId = 42;
userId -> url -> HTTPRequest -> HTTPResponse -> json -> email
===
userId -> email


var getUrl = userId => `https://reqres.in/api/users/${userId}`;

// Now, url -> response

function httpGet(url, callback) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = () => { 
    xmlHttp.readyState == 4 && 
    xmlHttp.status == 200 &&
      callback(xmlHttp.responseText);
  }
  xmlHttp.open('GET', url, true); // true for asynchronous 
  xmlHttp.send(null);
}

let email;
_.pipe(getUrl, httpGet); // what to do with callback???

// We could make it like this:

const httpGet = callback => url => {

_.pipe(getUrl, httpGet(response => ...)); // but the chain breaks here. You can't compose it further!
// The callback hell starts


// Smart guys who invented FP almost a century ago thought about this.  They said: let's add a notion of the Context.
// The Value is not just a Value, it's always in certain Context.
https://en.wikipedia.org/wiki/Functor
// What does the "mapping" mean?  It's a transformation of Value in certain Context.

// Functor: Value + Context  (in a box). 
// What kind of context this could be?
// Imagine a box that has multiple sub-sections, which are numbered by index. You can map every value by function, simultaneously, and produce a new box.
// Sounds familiar, right? It's Arrays.
// Yes, Arrays are Functors (kinda)
https://adit.io/posts/2013-04-17-functors,_applicatives,_and_monads_in_pictures.html
// (scroll down to arrays)

[1, 2, 3].map(x => x + 1);
[].map(x => x + 1);

x => [x]
  .map(half)
  .map(plus1)
  .map(negate)[0];

// Anything that can be "mapped" is a Functor.
// Let's make our own Functor!
var F = v => ({
  map: fn => F(fn(v))
});

(42).map(x => x);
// Note that it's "closed" in it's context. I can't get the value out directly, I can only map (and it makes sense, because the Value is always in certain Context).

(42)
  .map(x => x)
  .map(x => console.log(x));

// 1h

// But what if I want to change the Context?
// Monads. Are functors that can be "flatten": unwrapped from the Context (but then wrapped back into different Context).
// I know that it's too much of boring information,  but bear with me, now it's going to get interesting.

// Our own Monad!
var M = v => ({
  map: fn => M(fn(v)),
  flatMap: fn => fn(v)
});

M(42)
  .map(x => x + 1)
  .flatMap(x => [x]) // Swapping on other, completely different Monad (Context "box")
  .map(x => x / 2)
  .filter(x => 21);

// Arrays are Monads (kinda)!
// Let's play a little bit with flatMap() for Arrays:
[[1], [2], [3]].flatMap(x => x);
// Can I unwrap it totally, to be 1, 2, 3? NO. The Context is always present.
[1, 2, 3].flatMap(x => [x, x, x]);

// NOW...
// Map and FlatMap give us the power to compose functions that operate on values in different contexts!
// We can compose functions to transform the Values in different Contexts

// Let's take a look at another useful Monad: a Promise. What's the Context here? The value is not accessible right away, but will be available in the future.
// That's why in some other languages the Promises are called Futures.
// Let's get back to our example with the email, and see how the Promise Monad can help us there:
var getUrl = userId => `https://reqres.in/api/users/${userId}`;
var fetchUrl = url => fetch(url);
var toJson = data => data.json();
var getEmail = user => user.data.email;

var getEmailByUserId = userId => Promise
  .resolve(userId) // 'lift up' the value in Monad Context. Reverse to 'flatten'.
  .then(getUrl)
  .then(fetchUrl) // flatMap / swap on another Promise
  .then(toJson) // again, flatMap / swap on another Promise
  .then(getEmail)
  .catch(e => 'Email unavaliable');

getEmailByUserId(2).then(console.log);
// Notice how flatMap() magically applies!

// Now, if we know that the functions that we compose are Pure, and same input will ALWAYS produce same output,
// we can just "memoize" them: execute the calculation only once, and then reuse the results.
// As an example, if we pretend that the user IDs will never change, we can memoize it:
var getEmailByUserIdMemoized = _.memoize(getEmailByUserId);
// That's how you can optimize your application instantly and out-of-the-box, if you work with Pure functions.

// There is no way to get the value OUT of the wrapper
// We can map it, we can log it, etc. but always inside a Monad
// And that's the whole point! It makes the developer _think_ always in terms of current context
// Monad guarantees that it's value is isolated, immutable and safe. 
// Side effects like errors are extracted out. It's just another context: 'there might be an error...'

// With pure function composition, our app starts to resemble the beautiful mathematic equation.
// 1h 30m
