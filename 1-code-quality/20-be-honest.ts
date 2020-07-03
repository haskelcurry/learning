let checked = 0;
items.map(item => {
  backend.check(item).then(result => {
    if (result) {
      checked++;
    }
  });
});










// const checked = Promise.all(
//   items.map(item => backend.check(item))
// )
// .then(checks => checks.filter(Boolean).length);













// const checked = Promise
//   .all(items.map(backend.check))
//   .then(filter(Boolean))
//   .then(size);



// https://lodash.com/docs/4.17.15#size
