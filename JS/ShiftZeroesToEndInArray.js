const shiftZeroesToEndInArray = (array) => {
    let swapIndex = null;
    let j = array.length - 1;
    for(let index = 0 ; index < array.length; index++){
     //   console.log('j- ', j, ' - ', array[j], ' - ','index- ', index, ' - ', array[index], ' - ', array)
    // console.log('j> ', j, ' index> ', index)
     if(j === index){
          console.log(array)
          return
     }
        if(array[index] == 0){
            if(array[j] !== 0){
                array[index] = array[j]
                array[j] = 0
            }
            j--;
           
        }
       
    }
   // console.log(array)

}

shiftZeroesToEndInArray([8,5,0,10,0,20])