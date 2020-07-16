let active = [];

function activate(str) {
  active.push(str);
}

// SIDE EFFECTS

/***********************************************************************************/


function onClick(user) {
  user.selected = true;
}




// When there is no return, beware!


/***********************************************************************************/


// Even with return, beware!

function getUser(settings) {
  let user = getLoggedUser();

  backend.getUserRank(user).then(rank => {
    user.rank = rank;
  });

  settings.userLoaded = true;

  return user;
}


/***********************************************************************************/


// Pure Components

Component({...})
export class UserComponent {
  @Input() user;

  onToggle() {
    // !!!
    this.user.selected = true;
  }
}



// PURE-FUNCTIONS.PNG
// Pure functions are easy to reason about
// Powered by Single Responsibility principle, they are ideal declarative building blocks
