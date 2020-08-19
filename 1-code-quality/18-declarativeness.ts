// Proper naming is required for Declarativeness


// Impreative
for (let n = 0; n < list.length; n++) {
  const current = list[n];
  if (current < 10) {
    list[n] = current + 1;
  }
}









// Declarative
// const listPlusOne = list.map(i => i < 10 ? i + 1 : i);



// map is a higher order function that is a perfect example of good code:
// declarative, well-named, does one thing and does it good
