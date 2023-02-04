/* 
Function.prototype.bind()
The bind() method creates a new function that, when called, has its this 
keyword set to the provided value, with a given sequence of arguments 
preceding any provided when the new function is called.
*/

function saySomething(message){
    return this.name + " is " + message;
  }
          
  var person4 = {name:  "John"};
          
  saySomething.apply(person4, ["awesome"]);
  
  /* 
  Function.prototype.apply()
  The apply() method calls a function with a given this value, and arguments provided as an array (or an array-like object).
  */

  const numbers = [5, 6, 2, 3, 7];

const max = Math.max.apply(null, numbers);

console.log(max);
// expected output: 7

const min = Math.min.apply(null, numbers);

console.log(min);
// expected output: 2


/* 
Function.prototype.call()
The call() method calls a function with a given this value and arguments provided individually.
*/


function sayHello(){
    return "Hello " + this.name;
  }
          
  var obj = {name: "Sandy"};
          
  sayHello.call(obj);
          
  // Returns "Hello Sandy"


  //eg 2
  var person = {
    age: 23,
    getAge: function(){
      return this.age;
    }
  }
          
  var person2 = {age:  54};
  person.getAge.call(person2);
          
  // Returns 54  

  //eg 3

  function saySomething(message){
    return this.name + " is " + message;
  }
          
  var person4 = {name:  "John"};
          
  saySomething.call(person4, "awesome");
  // Returns "John is awesome"    



  //bind-----------


  var bikeDetails = {
    displayDetails: function(registrationNumber,brandName){
    return this.name+ " , "+ "bike details: "+ registrationNumber + " , " + brandName;
  }
}
        
var person1 = {name:  "Vivek"};
        
var detailsOfPerson1 = bikeDetails.displayDetails.bind(person1, "TS0122", "Bullet");
    


// This method returns a new function, where the value of “this” skeyword will be bound to the owner object, which is provided as a parameter.
        
        
detailsOfPerson1();
// Returns Vivek, bike details: TS0452, Thunderbird