function isNumber(nums) {
  if (!nums.every((num) => Number.isInteger(num))) {
    throw new Error("All arguments must be numbers.");
  }
  return nums.reduce((a, b) => a + b);
}
// console.log(isNumber([1,2,3]))
console.log(isNumber([10, "B", 20]))