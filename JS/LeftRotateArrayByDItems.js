const leftRotateArrayByDItems = (array, D) => {
   
    for(let i = 0; i < D; i++){
        let firstItem = array[0]
    for(let index = 0; index < array.length - 1; index++){
        array[index] = array[index+1];
    }
    array[array.length -1] = firstItem;
}
   
    console.log(array)
} 

leftRotateArrayByDItems([1,2,3,4,5], 2)