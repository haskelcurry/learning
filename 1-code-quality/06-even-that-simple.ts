const author = users.find(u => u.id === authorId);








// const author = users.find(where({id: authorId}));










// const author = find({id: authorId})(users);










// Point-free programming


// backend.get(...)
//   .then(result => result.filter(...))
//   .then(result => backend.post(result))
//   .then(result => result.map(...))
//   .then(result => // final action);
