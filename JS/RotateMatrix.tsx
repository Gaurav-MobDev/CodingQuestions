const rotateMatrixBy90Degree = (size) => {
    let matrix = '';
    for(let row = 0 ; row < size; row++){
        for(let col = 0;col  <size ; col++){
           matrix += `(${row},${col}) `
        }
        matrix += '\n'
    }

    let rotatedMatrix = '';
    for(let row = 0 ; row < size; row++){
        for(let col = size - 1;col  >= 0 ; col--){
            rotatedMatrix += `(${col},${row}) `
        }
        rotatedMatrix += '\n'
    }
    console.log(matrix)
    console.log('\n\n\n\n')
    console.log(rotatedMatrix)
}

rotateMatrixBy90Degree(4)