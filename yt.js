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


// Write a function called maxSubArraySum which accepts an array of integers and a number called "n"
// the function should calculate the maximum sum of "n" consecutive elements in the array