import { curry } from 'lodash/fp';

const someFn = (a, b, c) => ...;
const curriedFn = curry(someFn);



curriedFn(a, b, c);
curriedFn(a)(b, c);
curriedFn(a, b)(c);
curriedFn(a)(b)(c);
