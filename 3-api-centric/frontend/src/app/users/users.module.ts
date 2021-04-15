import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@app/shared/shared.module';
import { EditUserPageModule } from './edit-user-page/edit-user-page.module';
import { UserListPageModule } from './user-list-page/user-list-page.module';
import { UsersState } from './users.state';
import { routes } from './users.routes';

@NgModule({
  imports: [
    SharedModule,
    EditUserPageModule,
    UserListPageModule,
    RouterModule.forChild(routes)
  ],
  providers: [UsersState]
})
export class UsersModule {
  constructor() {
    console.info(`%c ✔ Users module is loaded`, 'color: chartreuse');
  }
}
