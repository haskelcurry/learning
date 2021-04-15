import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { UserDTO } from '@api/models';

@Component({
  selector: 'user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserListItemComponent {
  @Input() user: UserDTO;
}
