function sumNums(...nums) {
  if (!nums.every((num) => Number.isInteger(num))) {
    throw "All arguments must be numbers.";
  } 
    
  return nums.reduce((a, b) => a + b);
}

console.log(sumNums(1, 2, 3)); //> 6
console.log(sumNums(10, 20, 30)); //> 60
sumNums(10, "B", 20); //> error All arguments must be numbers.
console.log(sumNums(10, 20, 30)); //> 60