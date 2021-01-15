// I wanted to introduce you the idea:
// View = Model => HTML (DOM)
// Let's try that out:

var view = model => `<div>${model.userName}</div>`

var model = {
  userName: 'John Smith'
};

var render = view => document.body.innerHTML = view;

render(view(model));

// Now let's add components (pure):
//================================
var header = content => `
  <header><h2>${content}</h2></header>
`;

var model = {
  title: 'My App',
  users: [
    {id: 'id1', name: 'John Smith', selected: false},
    {id: 'id2', name: 'Jack Doe', selected: false},
  ],
  copyright: 'All rights reserved (c) 2021'
};

var view = model => [
  header(model.title),
  content([
    title('Users list:'),
    usersList(model.users),
    button('apply-button', 'Click me!')
  ]),
  footer(model.copyright)
].join('');

var render = view => document.body.innerHTML = view;

render(view(model));

// And more components:
//================================
var model = {
  title: 'My App',
  users: [
    {id: 'id1', name: 'John Smith'},
    {id: 'id2', name: 'Jack Doe'},
  ],
  copyright: 'All rights reserved (c) 2021'
};

var header = content => `
  <header><h2>${content}</h2></header>
`;

var content = content => `
  <content>${content.join('')}</content>
`;

var list = items => items.map(i => `
  <li>${i}</li>
`).join('');

var usersList = users => list(
  users.map(u => `
    <user id="${u.id}">
      ${u.name} (${u.id})
    </user>
  `)
);

var title = content => `
  <h3>${content}</h3>
`;

var footer = content => `
  <footer><h4>${content}</h4></footer>
`;

var button = title => `
  <button style="width: 100%">${title}</button>
`;

var view = model => [
  header(model.title),
  content([
    title('Users list:'),
    usersList(model.users),
    button('Click me!')
  ]),
  footer(model.copyright)
].join('');

var render = view => document.body.innerHTML = view;

render(view(model));
