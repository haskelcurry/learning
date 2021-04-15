import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { ChatState } from '@app/chat/chat.state';
import { UserDTO } from '@api/models';
import { UserService } from '../users.service';
import { UsersState } from '../users.state';

@Component({
  selector: 'edit-user-page',
  templateUrl: './edit-user-page.component.html',
  styleUrls: ['./edit-user-page.component.scss']
})
export class EditUserPageComponent {
  user: UserDTO;
  formGroup: FormGroup;

  creating = true;

  constructor(
    private state: UsersState,
    private route: ActivatedRoute,
    private router: Router,
    private service: UserService,
    private chatState: ChatState
  ) {}

  ngOnInit() {
    const userId = this.route.snapshot.params.userId;
    this.creating = !userId;

    if (this.creating) {
      this.state.select(s => s.creating).subscribe(r => (this.user = r));
    } else {
      this.service.getUserData({ id: userId }).subscribe(r => (this.user = r));
    }
  }

  onFormChange(value: UserDTO) {
    this.creating && this.state.setValue({ creating: value });
  }

  openChat() {
    const { firstName, lastName } = this.user.name;
    this.chatState.openChat(`${firstName} ${lastName}`);
    this.router.navigate(['chat']);
  }

  back() {
    this.router.navigate(['users']);
  }
}
