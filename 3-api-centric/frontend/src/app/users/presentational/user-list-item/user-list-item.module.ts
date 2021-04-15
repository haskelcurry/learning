import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { SharedModule } from '@app/shared/shared.module';
import { UserListItemComponent } from './user-list-item.component';

@NgModule({
  imports: [SharedModule, MatIconModule, MatListModule],
  declarations: [UserListItemComponent],
  exports: [UserListItemComponent]
})
export class UserListItemModule {}
