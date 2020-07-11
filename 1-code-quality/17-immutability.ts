const sortDesc = (arr) => {
  return arr.sort((a, b) => b - a);
}

const arr = [1, 2, 3, 4];
const reverse = sortDesc(arr);


console.log(reverse);
// [4, 3, 2, 1]
console.log(arr);
// [4, 3, 2, 1]
