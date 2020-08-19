import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../login/user.service';

@Component({
  selector: 'my-chart',
  template: `
    <div class="user-badge">
      {{ userService.loggedUser?.name }}
      {{ userService.loggedUser?.surname }}
    </div>
  `,
  styles: [`
  `]
})
export class ChartComponent implements OnInit {
  constructor(public userService: UserService, public http: HttpClient) {}

  ngOnInit(): void {}
}
