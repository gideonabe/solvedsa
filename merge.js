function mergeSortedArrays(arr1, arr2){
  let output = [];
  let i = 0;
  let j = 0;

  while( i < arr1.length && j < arr2.length){
    if(arr2[j] > arr1[i]){
      output.push(arr1[i]);
      i++;
    } else {
      output.push(arr2[j]);
      j++
    }
  }
  while(j < arr2.length){
    output.push(arr2[j]);
    j++;
  }
  while(i < arr1.length){
    output.push(arr1[i]);
    i++;
  }

  return output;
}

console.log(mergeSortedArrays([0, 1, 6], [2, 3, 5]))


function mergeSort(arr){
  if(arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  return mergeSortedArrays(left, right);
}

console.log(mergeSort([9, 5, 0, 1]))