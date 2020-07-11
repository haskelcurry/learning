import { map } from 'lodash/fp';

const getAge = o => o.age;
const ages = map(getAge, users);
