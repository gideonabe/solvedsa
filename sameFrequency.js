function sameFrequency(x, y){
  if (x < 0 || y < 0){
    console.log("False: One or both numbers are negative");
    return;
  }

  const strX = x.toString();
  const strY = y.toString();

  if (strX.length !== strY.length){
    console.log("False: Numbers have different number of digits");
    return;
  }

  function checkNoOfChars(str){
    const CharNo = {};
    for(let char of str){
      CharNo[char] = (CharNo[char] || 0) + 1;
    }
    return CharNo;
  }

  const CharNoX = checkNoOfChars(strX);
  const CharNoY = checkNoOfChars(strY);

  for(let char in CharNoX){
    if(CharNoX[char] !== CharNoY[char]){
      console.log(`False: Mismatch found for digit '${char}'`);
      return;
    }
  }

  console.log("True: Both numbers have same frequency of digits");
}

sameFrequency(401, 410); 
sameFrequency(182, 281); 
sameFrequency(34, 14);  
sameFrequency(22, 222);
