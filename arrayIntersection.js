function arrayIntersection(arr1, arr2){
  const newArr = new Set(arr2)

  return arr1.filter(item => newArr.has(item));
}

console.log(arrayIntersection([1, 2, 3, 4, 5], [1, 3, 5, 7, 9]));
console.log(arrayIntersection([1, 1, 1, 1, 1], [2, 2, 2, 2, 2]));
console.log(arrayIntersection([1, 2, 3, 4, 5], [5, 4, 3, 2, 1]));