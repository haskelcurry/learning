import { curry } from 'lodash/fp';

const someFn = (a, b, c) => ...;
const curriedFn = curry(someFn);



curriedFn(a, b, c);
curriedFn(a)(b, c);
curriedFn(a, b)(c);
curriedFn(a)(b)(c);












// Reusability

import { pluck } from 'lodash/fp';

const getId = pluck(['id']);

const userIds = users.map(getId);
const adminIds = admins.map(getId);




// We use the FP techniques to improve declarativeness, readability and therefore code quality.
// LODASH FP
