function onUserLoaded(o) {
  const rank = getUserRank(o);

  switch (getUserRank()) {
    case USER: {
      backend.get(...).then(result => {
        o.loaded = true; break;
      });
    }
    case MODER: o.moder = true; break;
    case ADMIN: o.admin = true; break;
    default: o.unknown = true;
  }

  return o;
}









// function onUserLoaded(o): Promise<User> {
//   const rank = getUserRank(o);

//   const result = {
//     USER: () => backend.get(...).then(() => ({loaded: true})),
//     ADMIN: () => ({admin: true})
//     MODER: () => ({moder: true})
//   }[rank]
//     || () => ({unknown: true});

//   return Promise
//     .resolve(result())
//     .then(change => ({...o, ...change}));
// }



// https://ramdajs.com/docs/#cond
