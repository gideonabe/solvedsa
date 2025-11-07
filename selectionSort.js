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