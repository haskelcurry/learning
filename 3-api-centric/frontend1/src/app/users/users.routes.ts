import { UserListPageComponent } from './user-list-page/user-list-page.component';
import { EditUserPageComponent } from './edit-user-page/edit-user-page.component';

export const routes = [
  {
    path: '',
    component: UserListPageComponent
  },
  {
    path: 'edit/:userId',
    component: EditUserPageComponent
  },
  {
    path: 'create',
    component: EditUserPageComponent
  }
];
