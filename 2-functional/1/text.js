var M = v => ({
  map: fn => M(fn(v)),
  flatMap: fn => fn(v)
});



// ========================================
var { fromEvent, operators, of } = rxjs;
var { map } = operators;

fromEvent(document, 'mousemove')
  .pipe(map(e => e.screenX))
  .subscribe(x => document.body.style.background = `rgba(${255 - x},${x},0,1)`);

M(42)
  .map(n => n + 1)
  .flatMap(n => of(n)) // Transform in Observable Monad
  .subscribe(n => document.body.innerHTML = n);




// ========================================
var { fromEvent, operators, of } = rxjs;
var { map, withLatestFrom } = operators;

var my$ = M(42)
  .map(n => n + 1)
  .flatMap(n => of(n)); // Transform in Observable Monad

fromEvent(document, 'mousemove')
  .pipe(
    map(e => e.screenX),
    withLatestFrom(my$)
  )
  .subscribe(([x, n]) => {
    document.body.style.color = `rgba(${255 - x},${x},0,1)`;
    document.body.innerHTML = n;
  });



// ========================================
var { operators, fromEvent, from, of } = rxjs;
var { map, flatMap, filter, scan, startWith } = operators;

var app$ = fromEvent(document, 'click')
  .pipe(
    filter(e => e.target.tagName === 'BUTTON'),
    scan(logged => !logged, false),
    startWith(false),
    flatMap(logged => logged ? login() : of(null)),
    map(user => {
      console.log(user);
      return {
      logged: !!user,
      avatar: user?.avatar,
      userName: getName(user)}
    })
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

function render(app) {
  const {logged, userName, avatar} = app;
  document.body.innerHTML = `
    <h1>${userName}</h1>
    ${avatar ? `<img src=${avatar}>` : ''}
    <button>Log ${logged ? 'out' : 'in'}</button>
  `;
}

// Now you must be thinking: there he goes again with RxJS...
// I don't use RxJS on my project! Ok, ok :) Let's get back to pure functions.
// But let's implement something more serious! Like... UI framework!
