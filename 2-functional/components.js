export const header = content => `<header><h2>${content}</h2></header>`;
export const content = content => `<content>${content.join('')}</content>`
export const list = items => items.map(i => `<li>${i}</li>`).join('');
export const usersList = users => list(
  users.map(u => `
    <user id="${u.id}">
      ${u.name} (${u.id}) <b>${u.selected ? '+' : '-'}</b>
    </user>
  `)
);
export const title = content => `<h3>${content}</h3>`;
export const footer = content => `<footer><h4>${content}</h4></footer>`;
export const button = (id, title) => `<button id="${id}">${title}</button>`;
