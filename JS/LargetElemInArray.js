const findLargetElementInArray = (array) => {
      let max = array[0];
      for(let index = 1; index < array.length; index++){
        if(array[index] >  max){
            max = array[index]
        }
      }
      console.log(max);
}


findLargetElementInArray([1,5,8,2,44,5,12,9,23,59,12,-60,34])