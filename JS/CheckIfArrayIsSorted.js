const checkIfArrayIsSorted = (array) => {
    let isSorted = true;
    for(let index = 0; index < array.length - 1; index++){
        if(array[index] > array[index+1]){
            isSorted = false;
            return;
        }
    }
    console.log('isSorted- ', isSorted);
}

checkIfArrayIsSorted([1,2,3,4,5,6,7,8,9])