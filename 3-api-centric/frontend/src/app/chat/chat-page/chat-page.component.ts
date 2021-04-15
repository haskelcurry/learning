import { Component, Inject, Optional, OnDestroy, OnInit } from '@angular/core';
import { ChatState } from '../chat.state';

@Component({
  selector: 'chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.scss']
})
export class ChatPageComponent {
  constructor(
    public state: ChatState
  ) {}

  send(message) {
  }

  close(username) {
    this.state.closeChat(username);
  }
}
