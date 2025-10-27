function titleCase(str){

  return str
          .toLowerCase()
          .split(' ')
          .map((item) => item.charAt(0).toUpperCase() + item.slice(1))
          .join(' ');

  // const string = str.toLowerCase().split(' ');
  // for(let i = 0; i < string.length; i++){
  //   string[i] = string[i].charAt(0).toUpperCase() + string[i].slice(1);
  // }

  // return string.join(' ');
}

console.log(titleCase("I'm a little tea pot"));
console.log(titleCase('sHoRt AnD sToUt'));
console.log(titleCase('HERE IS MY HANDLE HERE IS MY SPOUT'));

function reverseString(str){
  // if(str === ""){
  //   return "";
  // } else {
  //   return str.toLowerCase().split('').reverse().join('');
  // }

  const lowered = str.toLowerCase()
  let reversed = "";
  if(lowered === ""){
    return ""
  } else {

    for(let i = lowered.length - 1; i >= 0; i--){
      reversed += lowered[i];
    }
   return reversed;

  }

}

console.log(reverseString('hello'))
console.log(reverseString('world'))
console.log(reverseString(''))

function isPalindrome(str){
  const string = str;
  const reversed = str.toLowerCase().split('').reverse().join('');

  if(str === ''){
    return '';
  } else {
    for(let i = 0; i <= string.length; i++){
      if(string[i] === reversed[i]){
        return true;
      } else {
        return false;
      }
    }
  }

}

console.log(isPalindrome("madam"));
console.log(isPalindrome('racecar'));
console.log(isPalindrome("hello"));
console.log(isPalindrome(''));


function countVowels(str){
  const vowels = "aeiouAEIOU"
  let count = 0;

  for(let i = 0; i < str.length; i++){
    if(vowels.includes(str[i])){
      count++;
    }
  }

  return count;
}

console.log(countVowels('hello'));
console.log(countVowels('why'));
console.log(countVowels('mississippi'));

function removeDuplicates(arr){
  // const newArray = new Set(arr)
  // return newArray

  const newArray = [];

  for(let el of arr){
    if(newArray.indexOf(el) === -1){
      newArray.push(el)
    }
  }

  // for(let i = 0; i < arr.length; i++){
  //   if(!newArray.includes(arr[i])){
  //     newArray.push(arr[i])
  //   }
  // }

  return newArray;
}

console.log(removeDuplicates([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]))
console.log(removeDuplicates([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
console.log(removeDuplicates([1, 2, 3, 4, 5, true, 1, 'hello', 2, 3, 'hello', true]))