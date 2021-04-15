import { Component } from '@angular/core';
import { UserService } from '../users.service';

@Component({
  selector: 'user-list-page',
  templateUrl: './user-list-page.component.html',
  styleUrls: ['./user-list-page.component.scss']
})
export class UserListPageComponent {
  users$ = this.service.getUsers();

  constructor(private service: UserService) {}
}
