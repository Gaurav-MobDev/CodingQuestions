/* 
Currying is an advanced technique to transform a function of arguments n, to n functions of one or less arguments.
*/


function add (a) {
    return function(b){
      return a + b;
    }
  }
  
  add(3)(4)