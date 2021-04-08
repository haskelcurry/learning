// View = Model => HTML (DOM)

var header = content => `
  <header><h2>${content}</h2></header>
`;

var content = content => `
  <content>${content.join('')}</content>
`;

var footer = content => `
  <footer><h4>${content}<h4></footer>
`;

var title = content => `
  <h3>${content}</h3>
`;

var list = items => items.map(i => `
  <li>${i}</li>
`).join('');

var userList = users => list(
  users.map(u => `
    <user id="${u.id}">
      ${u.name} (${u.id})
    </user>
  `)
);

var button = title => `
  <button style="width: 100%">${title}</button>
`;





var model = {
  title: 'My App',
  users: [
    {id: 'id1', name: 'John Smith', selected: false},
    {id: 'id1', name: 'Jack Doe', selected: false}
  ],
  copyright: 'All rights reserved (c) 2021'
};





var view = model => [
  header(model.title),
  content([
    title('Users list'),
    userList(model.users),
    button('Click me!')
  ]),
  footer(model.copyright)
].join('');

var render = view => document.body.innerHTML = view;

render(view(model));






















