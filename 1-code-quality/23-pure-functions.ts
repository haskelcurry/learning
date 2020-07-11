let active = [];

function activate(str) {
  avctive.push(str);
}

// SIDE EFFECTS

/***********************************************************************************/


function onClick(user) {
  user.selected = true;
}




// When there is no return, beware!


/***********************************************************************************/


// Even with return, beware!

function getUser() {
  let user = getLoggedUser();

  backend.getUserRank(user).then(rank => {
    user.rank = rank;
  })

  return user;
}


/***********************************************************************************/


// Pure Components

Component({...}) {
  @Input() user;

  onToggle() {
    // !!!
    this.user.selected = true;
  }
}



// PURE-FUNCTIONS.PNG
