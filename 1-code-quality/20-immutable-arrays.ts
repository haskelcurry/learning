const arr = [1, 2, 3, 4];




const appended = [...arr, 5];
// [1, 2, 3, 4, 5]
const prepended = [0, ...arr];
// [0, 1, 2, 3, 4]




const appended = arr.concat([5]);
// [1, 2, 3, 4, 5]
const prepended = [0].concat(arr);
// [0, 1, 2, 3, 4]




const popped = arr.slice(0, -1);
const shifted = arr.slice(1);




import { sortBy } from 'lodash/fp';
const sorted = sortBy(arr);



const copied = [...arr];









// const sortDesc = array => [...array].sort((a, b) => b - a);
