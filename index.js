function sumNums(...c) {
  if (!c.every((num) => Number.isNumber(num))) throw "All arguments must be numbers.";
  return c.reduce((a, b) => a + b);
}

console.log(sumNums(1, 2, 3)); //> 6
sumNums(10, "B", 20); //> error All arguments must be numbers.