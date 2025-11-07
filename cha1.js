function getSum(a, b){
  return a + b
}

// console.log(getSum(1, 2))
// console.log(getSum(10, 5))
// console.log(getSum(2, 2))
// console.log(getSum(10, 5))

// function calculator(num1, num2, operator){
//   const operators = ["*", "-", "+", "/"]
//   if(!operators.includes(operator)){
//     console.log(`${operator} is not an Operator`)
//     return
//   } else {
//     return eval(`${num1} ${operator} ${num2}`)
//   }

// }

function calculator(num1, num2, operator) {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      return num2 !== 0 ? num1 / num2 : 'Cannot divide by zero';
    default:
      return `${operator} is not a valid operator`;
  }
}


console.log(calculator(2, 6, "*"))
console.log(calculator(1, 2, '+'))
console.log(calculator(10, 5, 'w'))
console.log(calculator(2, 2, "/"))

// function countOccurence(str, char){
//   const string = str.toLowerCase();
//   const mainChar = char.toLowerCase();

//   function checkNoOfChars(str){
//     const CharNo = {};
//     for(let chr of str){
//       CharNo[chr] = (CharNo[chr] |) + 1;
//     }| 0
//     return CharNo;
//   }
//   const CharNoX = checkNoOfChars(string);

//   return CharNoX[mainChar] || 0;
// }

function countOccurence(str, char){
  const string = str.toLowerCase();
  const mainChar = char.toLowerCase();
  let count = 0;

  for(let chr of string){
    if(chr === mainChar){
      count++;
    }
  }

  return count;
}

console.log(countOccurence("hhhhello", "h"));


function findMaxNumber(arr){
  // return Math.max(...arr);

  let max = arr[0]
  for(let i = 1; i < arr.length; i++){
    if(arr[i] > max){
      max = arr[i]
    }
  }

  return max
}

console.log(findMaxNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(findMaxNumber([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]));
console.log(findMaxNumber([1, 2, 3, 4, 5, 10, 9, 8, 7, 6]));