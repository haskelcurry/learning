import { Component } from '@angular/core';

@Component({
  selector: 'shell',
  templateUrl: './shell-page.component.html',
  styleUrls: ['./shell-page.component.scss']
})
export class ShellPageComponent {
  navItems = [
    {
      path: 'users',
      icon: 'assignment_ind',
      label: 'Users'
    },
    {
      path: 'chat',
      icon: 'message',
      label: 'Chat'
    }
  ];
}
