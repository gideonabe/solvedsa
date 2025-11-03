function findMissingNumber(arr){
  const n = arr.length + 1;
  const expectedSum = (n * (n + 1)) / 2; // Sum of 1 to n
  const actualSum = arr.reduce((sum, num) => sum + num, 0); // total sum of el in arr

  return expectedSum - actualSum
}

console.log(findMissingNumber([1, 2, 3, 4, 6, 7, 8, 9, 10]))
console.log(findMissingNumber([10, 8, 6, 7, 5, 4, 2, 3, 1]))
console.log(findMissingNumber([10, 5, 1, 2, 4, 6, 8, 3, 9]))