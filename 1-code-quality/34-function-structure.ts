// But objects always mean changing state
// We just need to do it in controlled explicit way

Component({...})
export class UserPanel {

  private selectedUser;

  onToggle() {
    ...
  }

  someHandler() {
    ...
  }
}

// SO, HOW TO DO IT?
//
//
// function-structure.png



// If function returns value, IT SHOULD BE PURE!



// Now, let's talk about classes.
