import { createModel } from './model.js';
import { header, content, title, usersList, button, footer } from './components.js';
import { input } from './input.js';
import { renderToScreen } from './render.js';

const initialModel = {
  title: 'My App',
  content: {
    users: [
      {id: 'id1', name: 'John Smith', selected: false},
      {id: 'id2', name: 'Jack Doe', selected: false},
    ]
  },
  footer: 'Footer'
};

const model = createModel(initialModel);

const html = model => [

  header(model.title),
  content([
    title('Users list:'),
    usersList(model.content.users),
    button('apply-button', 'Click me!')
  ]),
  footer(model.footer)

].join('');

const view = model => renderToScreen(html(model));

model.renderWith(view);

input({
  click: {
    'user': id => model.update(state => {
      state.content.users.find(u => u.id === id).selected ^= true;
      return state;
    }),
    '#apply-button': () => alert('Thank you!')
  }
});
