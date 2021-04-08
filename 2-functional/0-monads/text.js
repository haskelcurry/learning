
var checked = 0;

items.map(item => {
  backend.check(item).then(result => {
    if (result) {
      checked++;
    }
  })
})


import { size } from 'lodash';


var checked = Promise
  .all(items.map(backend.check))
  .then(filter(Boolean))
  .then(size);
