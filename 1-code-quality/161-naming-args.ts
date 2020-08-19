@Component({
  ...
})
export class SomeComponent {
  users;

  private loadAvatar(userId: string, avatarType: 'rect' | 'round') {
    ...
    const user = this.users.find(u => u.id === userId);
    ...
  }
}
