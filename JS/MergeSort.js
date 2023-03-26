const merge = (array, leftIndex, middleIndex, rightIndex) => {
  let leftArraySize = middleIndex - leftIndex + 1;
  let rightArraySize = rightIndex - middleIndex;

  let leftArray = new Array(leftArraySize);
  let rightArray = new Array(rightArraySize);

  for (let index = 0; index < leftArraySize; index++) {
    leftArray[index] = array[leftIndex + index];
  }
  for (let index = 0; index < rightArraySize; index++) {
    rightArray[index] = array[1 + middleIndex + index];
  }

  let lIndex = 0;
  let rIndex = 0;
  let oIndex = leftIndex;

  while (lIndex < leftArraySize && rIndex < rightArraySize) {
    if (leftArray[lIndex] <= rightArray[rIndex]) {
      array[oIndex] = leftArray[lIndex];
      lIndex++;
    } else {
      array[oIndex] = rightArray[rIndex];
      rIndex++;
    }
    oIndex++;
  }

  while (lIndex < leftArraySize) {
    array[oIndex] = leftArray[lIndex];
    lIndex++;
    oIndex++;
  }

  while (rIndex < rightArraySize) {
    array[oIndex] = rightArray[rIndex];
    rIndex++;
    oIndex++;
  }
};

const mergeSort = (array, left, right) => {
  if (left >= right) {
    return;
  }

  let middle = left +  parseInt((right - left) / 2);
  mergeSort(array, left, middle);
  mergeSort(array, middle + 1, right);
  merge(array, left, middle, right);
};

function printArray(A, size) {
  for (var i = 0; i < size; i++) console.log(A[i] + " ");
}

let arr = [12, 11, 13, 5, 6, 7];
let arr_size = arr.length;

console.log("Given array is");
printArray(arr, arr_size);

mergeSort(arr, 0, arr_size - 1);

console.log("Sorted array is");
printArray(arr, arr_size);
