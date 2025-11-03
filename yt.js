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


// HELPER METHOD RECURSION PATTERN
// find all the odd values from a given array nums.

function getOddValues(nums){
  let arr = [];

  function helper(input){
    // write logic and define basecase
    if(input.length === 0){
      return;
    }
    if(input[0] % 2 !== 0){
      arr.push(input[0]);
    }
    helper(input.slice(1));
  }

  helper(nums);
  return arr;
}

console.log(getOddValues([1, 2, 3, 4, 5, 6]))

//  LINEAR SEARCH

function findTarget(arr, target){
  for(let i = 0; i < arr.length; i++){
    if(arr[i] === target){
      return i
    }
  }

  return -1;
}

console.log(findTarget([11, 1, 6, 2, 9], 6))

// BUBBLE SORT

function bubbleSort(arr){
  let n = arr.length;
  for(let i = 0; i < n - 1; i++){
    for(let j = 0; j < n - i - 1; j++){
      if(arr[j] > arr[j + 1]){
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }
  }

  return arr;
}

console.log(bubbleSort([29, 10, 14, 37, 19]));


// SELECTION SORT

function selectionSort(arr){
  let smallest;
  let temp;
  for(let i = 0; i < arr.length; i++){
    smallest = i;
    for(let j = i + 1; j < arr.length; j++){
      if(arr[smallest] > arr[j]){
        smallest = j;
      }
    }

    if(i !== smallest){
      temp = arr[smallest];
      arr[smallest] = arr[i]
      arr[i] = temp;
    }
  }

  return arr;
}

console.log(selectionSort([30, 11, 28, 15, 45]))