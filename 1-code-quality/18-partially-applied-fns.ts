// More fun with higher order functions

import { partial, map } from 'lodash/fp';

const getProp = (prop, o) => o[prop];
const getAge = partial(getProp, ['age']);
const ages = map(getAge, users);
