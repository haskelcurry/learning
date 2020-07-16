Component({...})
export class UserComponent {
  @Input() user;

  onToggle() {
    this.user.selected = true;
  }
}



// We'll talk more about Dual-Way Data Binding, it's implications and other high-level issues
// in one of our next meetings
