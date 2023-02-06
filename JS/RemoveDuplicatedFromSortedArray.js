const removeDuplicatesFromSortedArray = (array) => {
    let res = 1
    for(let i = 1; i < array.length; i++){
        if(array[i] !== array[i-1]){
            array[res] = array[i];
            res++
        }
    }
    console.log(array)
}

removeDuplicatesFromSortedArray([0,1,2,3,3,3,4,5,6,6,6,6,7,8,9,9])