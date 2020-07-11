public someMethod() {
  this.user = {};
  this.userService.initSomething();
  this.schedule = this.scheduleService.getSchedule();
  this.user.name = this.userService.getUserName();
  this.user.login = this.userService.getLogin();
  if (this.userService.isLoggedIn) {
    this.user.status = 'Online';
  }
  this.schedule.time = this.scheduleService.generateTime(this.prop);
  this.schedule.start();
  this.scheduleService.notifyStart();
}




// public someMethod() {
//   this.initUser();
//   this.initSchedule();
// }

// private initUser() {
//   this.userService.initSomething();
//   this.user = this.getNewUser();
// }

// private initSchedule() {
//   this.schedule = this.getNewSchedule();
//   this.schedule.start();
//   this.scheduleService.notifyStart();
// }

// private getNewUser() {
//   const {getUser, getName, getLogin, isLoggedIn} = this.userService;
//   return {
//     ...getUser(),
//     name: getName(),
//     login: getLogin(),
//     status: isLoggedIn ? 'Online' : 'Offline'
//   };
// }

// private getNewSchedule(timeProp) {
//   const {getSchedule, generateTime} = this.scheduleService;
//   return {
//     ...getSchedule(),
//     time: generateTime(timeProp)
//   };
// }
