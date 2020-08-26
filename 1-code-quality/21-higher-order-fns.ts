import { map } from 'lodash/fp';

const users = [{name: 'John', age: 30}, {name: 'Jane', age: 21}];

const getAge = o => o.age;
const ages = map(getAge, users);

// [30, 21];







// Map, Filter, Reduce -- main ones
