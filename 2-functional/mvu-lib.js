var initialModel = {
  title: 'My App',
  content: {
    users: [
      {id: 'id1', name: 'John Smith', selected: false},
      {id: 'id2', name: 'Jack Doe', selected: false},
    ]
  },
  footer: 'Footer'
};

var model = {
  value: initialModel,
  render: () => {},

  update(action) {
    this.value = action(this.value);
    this.render();
    console.info('\x1b[32m%s\x1b[0m', '➤ Model updated: ', this.value);
  },
  renderWith(handler) {
    this.render = () => handler(this.value);
    this.render();
  }
};

var header = content => `<header><h2>${content}</h2></header>`;
var content = content => `<content>${content.join('')}</content>`
var list = items => items.map(i => `<li>${i}</li>`).join('');
var usersList = users => list(
  users.map(u => `
    <user id="${u.id}">
      ${u.name} (${u.id}) <b>${u.selected ? '+' : '-'}</b>
    </user>
  `)
);
var title = content => `<h3>${content}</h3>`;
var footer = content => `<footer><h4>${content}</h4></footer>`;

var view = model => [

  header(model.title),
  content([
    title('Users list:'),
    usersList(model.content.users)
  ]),
  footer(model.footer)

].join('');

var events = {
  click: {
    'user': id => model.update(state => {
      state.content.users.find(u => u.id === id).selected ^= true;
      return state;
    })
  }
};

var input = () => {
  document.addEventListener('click', e => {
    const el = e.target;
    Object
      .entries(events.click)
      .find(([selector]) => el.matches(selector))?.[1](el.id);
  });
};

var renderToScreen = view => document.body.innerHTML = view;

model.renderWith(model => renderToScreen(view(model)));
input();
