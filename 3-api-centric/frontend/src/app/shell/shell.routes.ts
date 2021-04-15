import { ShellPageComponent } from './shell-page/shell-page.component';

export const routes = [
  {
    path: '',
    component: ShellPageComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'users'
      },
      {
        path: 'users',
        loadChildren: () =>
          import('../users/users.module').then(m => m.UsersModule)
      },
      {
        path: 'chat',
        loadChildren: () =>
          import('../chat/chat.module').then(m => m.ChatModule)
      }
    ]
  }
];
