export const Page = {
  title: 'My Page',
  open: path => browser.url(path),
}


export const LoginPage = {
  ...Page,
  username: () => $('#username'),
  ...
};
