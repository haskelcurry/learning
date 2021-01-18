// 15m on everything
//
// Let's take a look at another great Monad:
// Observables are Monads
var { fromEvent, operators, of } = rxjs;
var { map } = operators;

fromEvent(document, 'mousemove')
  .pipe(
    map(e => e.screenX),
    map(x => `rgba(${255 - x},${x},0,1)`)
  )
  .subscribe(color => document.body.style.background = color);

// Let's take our DIY Monad and play around with it:

var M = v => ({
  map: fn => M(fn(v)),
  flatMap: fn => fn(v)
});

M(42)
  .map(n => n + 1)
  .flatMap(n => of(n)) // Transform in Observable Monad
  .subscribe(n => document.body.innerHTML = n);




// ========================================
var { fromEvent, operators, of } = rxjs;
var { map, withLatestFrom } = operators;

var M = v => ({
  map: fn => M(fn(v)),
  flatMap: fn => fn(v)
});

var my$ = M(42)
  .map(n => n + 1)
  .flatMap(n => of(n)); // Transform in Observable Monad

fromEvent(document, 'mousemove')
  .pipe(
    map(e => e.screenX),
    map(x => `rgba(${255 - x},${x},0,1)`),
    withLatestFrom(my$)
  )
  .subscribe(([color, n]) => {
    document.body.style.color = color;
    document.body.innerHTML = n;
  });

// Let's get back to our idea of Inputs -> Transformation -> Outputs.
// If you think globally, every UI App has one main input: User Interaction.
// Mouse clicks, moves, keypresses and so on.
// Let's say that I have an app that reacts on mouse clicks. User clicks something, the app state transforms, the HTML / DOM changes:
// ========================================
var { operators, fromEvent } = rxjs;
var { map } = operators;

var app$ = fromEvent(document, 'click')
  .pipe(
    map(_ => ({
      someState: {}
    }))
  );

app$.subscribe(console.log);

// Let's think about what state I might want:
// ========================================
var { operators, fromEvent } = rxjs;
var { map } = operators;

var app$ = fromEvent(document, 'click')
  .pipe(
    map(_ => ({
      logged: false,
      avatar: null,
      userName: null
    }))
  );

app$.subscribe(console.log);

// Now let's write a render function instead of just logging the state:
// ========================================
var { operators, fromEvent } = rxjs;
var { map } = operators;

var app$ = fromEvent(document, 'click')
  .pipe(
    map(_ => ({
      logged: false,
      avatar: null,
      userName: null
    }))
  );

app$.subscribe(render);

function render(state) {
  const {logged, userName, avatar} = state;
  document.body.innerHTML = `
    <h1>${userName}</h1>
    ${avatar ? `<img src=${avatar}>` : ''}
    <button>Log ${logged ? 'out' : 'in'}</button>
  `;
}

// Let's start with the "logged" part of the state:
// ========================================
var { operators, fromEvent } = rxjs;
var { map, filter, scan, startWith } = operators;

var app$ = fromEvent(document, 'click')
  .pipe(
    filter(e => e.target.tagName === 'BUTTON'),
    scan(logged => !logged, false),
    startWith(false),
    map(logged => ({
      logged,
      avatar: null,
      userName: null
    }))
  );

app$.subscribe(render);

function render(state) {
  const {logged, userName, avatar} = state;
  document.body.innerHTML = `
    <h1>${userName}</h1>
    ${avatar ? `<img src=${avatar}>` : ''}
    <button>Log ${logged ? 'out' : 'in'}</button>
  `;
}

// ========================================
var { operators, fromEvent, from, of } = rxjs;
var { map, flatMap, filter, scan, startWith } = operators;

var app$ = fromEvent(document, 'click')
  .pipe(
    filter(e => e.target.tagName === 'BUTTON'),
    scan(logged => !logged, false),
    startWith(false),
    flatMap(logged => logged ? login() : of(null)), // Switch Monad + Context
    map(user => ({
      logged: !!user,
      avatar: user?.avatar,
      userName: getName(user)
    }))
  );

app$.subscribe(render);

function login() {
  return from(
    fetch(`https://reqres.in/api/users/2`)
      .then(r => r.json())
      .then(j => j.data)
  );
}

function toJson(data) {
  return data.json();
}

function getName(user) {
  return user
    ? `${user.first_name} ${user.last_name}`
    : 'No Logged User';
}

function render(state) {
  const {logged, userName, avatar} = state;
  document.body.innerHTML = `
    <h1>${userName}</h1>
    ${avatar ? `<img src=${avatar}>` : ''}
    <button>Log ${logged ? 'out' : 'in'}</button>
  `;
}

// Now you must be thinking: there he goes again with RxJS...
// I don't use RxJS on my project! Ok, ok :) Let's get back to pure functions.
// But let's implement something more serious! Like... UI framework!
// But before that, let's talk a little bit about an OOP.
//
// 1h 45m
