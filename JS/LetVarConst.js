/* 
keyword	             const	 let 	var
global scope	        no	  no	 yes
function scope	        yes	  yes	 yes
block  scope	        yes	  yes	 no
can be reassigned   	no	  yes	 yes
*/


//var vs let
function varVsLetFunction(){
    let awesomeCar1 = "Audi";
    var awesomeCar2 = "Mercedes";
  }
  
  console.log(awesomeCar1); // Throws an error
  console.log(awesomeCar2); // Throws an error


  //----------------------------------------------------------
  {
    var variable3 = [1, 2, 3, 4];
  }
  
  console.log(variable3); // Outputs [1,2,3,4]
  
  {
    let variable4 = [6, 55, -1, 2];
  }
  
  console.log(variable4); // Throws error
  
  for(let i = 0; i < 2; i++){
    //Do something
  }
  
  console.log(i); // Throws error
  
  for(var j = 0; j < 2; i++){
    // Do something
  }
  
  console.log(j) // Outputs 2


//Const----------------------------------------------------

const x = {name:"Vivek"};

x = {address: "India"}; // Throws an error

x.name = "Nikhil"; // No error is thrown

const y = 23;

y = 44; // Throws an error