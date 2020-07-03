let user;
let settings;

backend.getUser()
  .then(result => {
    user = result;
    backend.getSettings(user)
      .then(result => {
        settings = result;
        console.log(user, settings);
      });
  });






// ------------







// backend.getUser()
//   .then(user => Promise.all(
//     [user, backend.getSettings(user)]
//   ))
//   .then(([user, settings]) => {
//     console.log(user, settings);
//   });
