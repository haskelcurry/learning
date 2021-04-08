var { fromEvent, operators, of, from } = rxjs;
var { map, flatMap, filter, scan, startWith } = operators;

const onlyOnButton = filter(e => e.target.tagName === 'BUTTON');
const adjustLogged = scan(logged => !logged, false);
const loginIfNeeded = flatMap(logged => logged ? login() : of(null));

var app$ = fromEvent(document, 'click')
  .pipe(
    onlyOnButton,
    adjustLogged,
    startWith(false),
    loginIfNeeded,
    map(user => ({
      logged: !!user,
      avatar: user?.avatar,
      userName: getName(user)
    }))
  );

app$.subscribe(render);

function render(state) {
  const {logged, userName, avatar} = state;
  document.body.innerHTML = `
    <h1>${userName}</h1>
    ${avatar ? `<img src="${avatar}">` : ''}
    <button>Log ${logged ? 'out' : 'in'}</button>
  `;
}

function login() {
  return from(
    fetch(`https://reqres.in/api/users/2`)
      .then(r => r.json())
      .then(j => j.data)
  );
}

function getName(user) {
  return user
    ? `${user.first_name} ${user.last_name}`
    : 'No Logged User';
}

