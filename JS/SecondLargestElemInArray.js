const secondLargestElemInArray = (array) => {
    let max = array[0];
    let secondLargest = max;
    for(let index = 1; index < array.length; index++){
        if(array[index] > max){
            secondLargest = max;
            max = array[index]
        }
        if(secondLargest < array[index] && array[index] !== max){
            secondLargest = array[index]
        }
    }
    console.log('MAX- ', max, ' SECOND LARGEST- ', secondLargest)
}

secondLargestElemInArray([90,65,88,800,2,5,1,22,54,800,12,1,9,34,98,57,30,500,1000])