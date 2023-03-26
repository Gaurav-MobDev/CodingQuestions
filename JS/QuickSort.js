const quickSort = (arr, low, high) => {
  if (low < high) {
    let pivot = partition(arr, low, high);
    arr = quickSort(arr, low, pivot - 1);
    arr = quickSort(arr, pivot + 1, high);
  }
  return arr;
};

const partition = (array, low, high) => {
  const pivot = array[high];
  let leftPointer = low - 1;
  for (let index = low; index <= high - 1; index++) {
    if (array[index] < pivot) {
      leftPointer++;
      [array[index], array[leftPointer]] = [array[leftPointer], array[index]];
    }
  }
  [array[leftPointer + 1], array[high]] = [array[high], array[leftPointer + 1]];
  return leftPointer + 1;
};

const inputArray = [10, 80, 30, 90, 40, 50, 70];
const sortedArray = quickSort(inputArray, 0, inputArray.length - 1);
console.log(sortedArray);
