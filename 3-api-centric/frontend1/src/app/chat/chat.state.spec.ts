import { ChatState } from './chat.state';

describe('ChatState', () => {
  let state: ChatState;

  beforeEach(() => {
    state = new ChatState();
  });

  it('should not open duplicate chats', () => {
    const user1 = 'John Doe';
    const user2 = 'Jack Smith';

    state.openChat(user1);
    expect(state.value.chats).toStrictEqual([user1]);

    state.openChat(user2);
    expect(state.value.chats).toStrictEqual([user1, user2]);

    // Open the same chat once again
    state.openChat(user1);
    expect(state.value.chats).toStrictEqual([user1, user2]);
  });
});
