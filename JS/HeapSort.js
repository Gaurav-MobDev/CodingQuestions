// const heapSort = (array, size) => {
//   array = buildHeap(array, size);
//   for (let index = size - 1; index > 0; index--) {
//     [array[0], array[index]] = [array[index], array[0]];
//     array = heapify(array, index, 0);
//   }
//   return array;
// };

// const heapify = (array, n, node) => {
//   let largest = node;
//   const leftNode = node * 2 + 1;
//   const rightNode = node * 2 + 2;
//   if (leftNode < n && leftNode > largest) {
//     largest = leftNode;
//   }
//   if (rightNode < n && rightNode > largest) {
//     largest = rightNode;
//   }
//   if (largest != node) {
//     [array[node], array[largest]] = [array[largest], array[node]];
//     arr = heapify(array, n, largest);
//   }
//   return array;
// };

// const buildHeap = (array, size) => {
//   for (let index = Math.floor(size / 2) - 1; index >= 0; index--) {
//     array = heapify(array, size, index);
//   }
//   return array;
// };

// let arr = [12, 11, 13, 5, 6, 7];
// let n = arr.length;

// arr = heapSort(arr, n);

// console.log("Sorted array is");
// console.log(arr);


function heapify(arr, n, i) 
{ 
	let largest = i; 
	let l = 2*i + 1; 
	let r = 2*i + 2;
	if (l < n && arr[l] > arr[largest]) 
		largest = l; 

	if (r < n && arr[r] > arr[largest]) 
		largest = r; 

	if (largest != i) 
	{ 
		[arr[i], arr[largest]] = [arr[largest], arr[i]]; 
		arr = heapify(arr, n, largest); 
	} 
	return arr;
} 

function buildheap(arr, n){
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) 
		arr = heapify(arr, n, i);
	return arr;
}
function heapSort(arr, n) 
{  
	arr = buildheap(arr,n); 

	for (let i=n-1; i>0; i--) 
	{ 
		[arr[0], arr[i]] = [arr[i], arr[0]];
		arr = heapify(arr, i, 0); 
	} 
	return arr;
} 

let arr = [12, 11, 13, 5, 6, 7]; 
let n = arr.length; 

arr = heapSort(arr, n); 

console.log("Sorted array is"); 
console.log(arr);
