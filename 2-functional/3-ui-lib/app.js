import { createModel } from './mvu/model.js';
import { renderToScreen, renderToConsole } from './mvu/render.js';
import { input } from './mvu/input.js';

import { header, content, title, usersList, button, footer } from './components.js';

const initialModel = {
  title: 'My App',
  users: [
    {id: 'id1', name: 'John Smith', selected: false},
    {id: 'id2', name: 'Jack Doe', selected: false},
  ],
  copyright: 'All rights reserved (c) 2021'
};

const model = createModel(initialModel);

const html = model => [

  header(model.title),
  content([
    title('Users list:'),
    usersList(model.users),
    button('apply-button', 'Click me!')
  ]),
  footer(model.copyright)

].join('');

const view = model => renderToScreen(html(model));
// const view = model => renderToConsole(html(model));

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
