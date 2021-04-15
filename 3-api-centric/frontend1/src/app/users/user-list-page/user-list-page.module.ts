import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';

import { SharedModule } from '@app/shared/shared.module';
import { UserListItemModule } from '../presentational/user-list-item/user-list-item.module';
import { UserListPageComponent } from './user-list-page.component';

@NgModule({
  imports: [
    SharedModule,
    MatButtonModule,
    MatListModule,
    UserListItemModule,
    RouterModule
  ],
  declarations: [UserListPageComponent]
})
export class UserListPageModule {}
