const fizzBuzzArray = (num) => {
  let box = [];
  for(let i = 1; i <= num; i++){
    if(i % 3 === 0 && i % 5 === 0){
      box.push("FizzBuzz");
    } else if(i % 3 === 0){
      box.push("Fizz");
    } else if(i % 5 === 0){
      box.push("Buzz");
    } else {
      box.push(i)
    }
  }

  return box;
}

console.log(fizzBuzzArray(5))
console.log(fizzBuzzArray(15))