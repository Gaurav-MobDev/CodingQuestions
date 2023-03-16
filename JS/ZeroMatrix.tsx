// const zeroMatrix = () => {
//     let matrix = '1234103485637405';
//     let matrixForm = ''
//     for(let row = 0 ; row < matrix.length; row++){
//         matrixForm += matrix[row]
//         if((row+1)%4 == 0){
//            matrixForm += '\n'
//         }
//     }

//     console.log(matrixForm)

//     let zeroMatrix = '';
//     let zeroIndices = []
//     for(let row = 0 ; row < matrix.length ; row++){
//        // console.log(matrix[row])
//        if(matrix[row] == 0){
//         for(let i = (4 * parseInt(row/4)); i< (4* parseInt(row/4))+4;i++){
//            // console.log(i)
//             zeroIndices[i] = i;
//         }
//         for(let i = row%4; i< matrix.length;i= i+4){
//            // console.log(i)
//             zeroIndices[i] = i;
//         }
//        }else{
//         if(!zeroIndices[row])
//         zeroIndices[row] = false;
//        }
//     }
//      console.log(zeroIndices)
//     for(let row = 0 ; row < matrix.length; row++){
//         if(zeroIndices[row] === row){
            
//             zeroMatrix += '0'
         
//         }else{
            
//             zeroMatrix += matrix[row]
//         }
//         if((row+1)%4 == 0){
//             zeroMatrix += '\n'
//          }
       
//     }
//        console.log(zeroMatrix)
// }

// zeroMatrix()

const createZeroMatrix = () => {
    const MATRIX_SIZE = 4;
    const MATRIX_STRING = '1234103485637405';
  
    let matrixForm = '';
    for (let row = 0; row < MATRIX_STRING.length; row++) {
      matrixForm += MATRIX_STRING[row];
      if ((row + 1) % MATRIX_SIZE === 0) {
        matrixForm += '\n';
      }
    }
    console.log(matrixForm);
  
    const zeroIndices = new Set();
    for (let row = 0; row < MATRIX_STRING.length; row++) {
      if (MATRIX_STRING[row] === '0') {
        const startRow = row - (row % MATRIX_SIZE);
        const startCol = row % MATRIX_SIZE;
        for (let col = 0; col < MATRIX_SIZE; col++) {
          zeroIndices.add(startRow + col);
          zeroIndices.add(startCol + col * MATRIX_SIZE);
        }
      }
    }
    console.log(zeroIndices);
  
    let zeroMatrix = '';
    for (let row = 0; row < MATRIX_STRING.length; row++) {
      if (zeroIndices.has(row)) {
        zeroMatrix += '0';
      } else {
        zeroMatrix += MATRIX_STRING[row];
      }
      if ((row + 1) % MATRIX_SIZE === 0) {
        zeroMatrix += '\n';
      }
    }
    console.log(zeroMatrix);
  };
  
  createZeroMatrix();
  