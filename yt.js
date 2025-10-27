// Problem: Write a function that accepts an array and returns the 2 values that when sum together gives 0

const sumZero = (num) => {
  // Define pointers
  let i = 0;
  let j = num.length - 1;

  while( i < j){
    let sum = num[i] + num[j];
    if(sum === 0){
      return [num[i], num[j]];
    } else if(sum < 0){
      i++;
    } else {
      j--;
    }
  }
}

console.log(sumZero([-3, -2, -1, 0, 1, 2, 5]))


// SLIDING WINDOW
// Write a function called maxSubArraySum which accepts an array of integers and a number called "n"
// the function should calculate the maximum sum of "n" consecutive elements in the array

const maxSubArraySum = (arr, n) => {
  // find sum of n consecutive integers
  let maxSum = 0;
  for(let i = 0; i < n; i++){
    maxSum += arr[i];
  }

  let tempSum = maxSum;
  for(let i = n; i < arr.length; i++){
    tempSum = tempSum - arr[i - n] + arr[i];
    maxSum = Math.max(tempSum, maxSum);
  }

  return maxSum;
}

console.log(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 4)
); 


// RECURSION
function countdown(n){
  if(n <= 0){
    console.log("Done!")
    return;
  }

  console.log(n);
  countdown(n - 1);
}

console.log(countdown(10))

function factorial(n){
  if(n === 1) return 1;

  return n * factorial(n - 1);
}

console.log(factorial(6));