const pivot = (arr, start = 0, end = arr.length - 1) => {
  const pivot = arr[start];
  let pivotIdx = start;

  for(let i = start + 1; i <= end; i++){
    if(pivot > arr[i]){
      pivotIdx++;
      [arr[pivotIdx], arr[i]] = [arr[i], arr[pivotIdx]];
    }
  }

  [arr[start], arr[pivotIdx]] = [arr[pivotIdx], arr[start]];
  return pivotIdx;
};


const quicksort = (arr, start = 0, end = arr.length - 1) => {
  if(start < end) {
    let pivotIdx = pivot(arr, start, end);

    // left
    quicksort(arr, start, pivotIdx - 1);
    // right
    quicksort(arr, pivotIdx + 1, end);
  }

  return arr;
}

const arr = [4, 8, 2, 1, 5, 7, 6, 3]
console.log(quicksort(arr, 0, arr.length - 1))