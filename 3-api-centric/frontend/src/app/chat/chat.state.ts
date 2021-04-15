import { without, uniq } from 'lodash/fp';
import { Injectable } from '@angular/core';
import { State } from '@app/shared/state-management';

export type Username = string;

export interface ChatStateInterface {
  chats: Username[];
  selectedIndex: number;
}

export const initialState = {
  chats: [],
  selectedIndex: 0
};

@Injectable({
  providedIn: 'root'
})
export class ChatState extends State<ChatStateInterface> {
  constructor() {
    super(initialState, { rehydrate: true });
  }

  openChat(username: Username) {
    this.setValue({
      chats: uniq(this.value.chats.concat(username))
    });
  }

  closeChat(username: Username) {
    this.setValue({
      chats: without([username], this.value.chats)
    });
  }

  selectLastTab() {
    this.setValue({
      selectedIndex: this.value.chats.length - 1
    });
  }
}
