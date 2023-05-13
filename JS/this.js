function getThis() {
    return this;
  }
  
  const obj1 = { name: "obj1" };
  const obj2 = { name: "obj2" };
  
  obj1.getThis = getThis;
  obj2.getThis = getThis;
  
  console.log(obj1.getThis()); // { name: 'obj1', getThis: [Function: getThis] }
  console.log(obj2.getThis()); // { name: 'obj2', getThis: [Function: getThis] }
  const obj3 = {
    __proto__: obj1,
    name: "obj3",
  };
  
  console.log(obj3.getThis()); // { name: 'obj3' }
    
  const obj4 = {
    name: "obj4",
    getThis() {
      return this;
    },
  };
  
  const obj5 = { name: "obj5" };
  
  obj5.getThis = obj4.getThis;
  console.log(obj5.getThis()); // { name: 'obj5', getThis: [Function: getThis] }
  

  function logThis() {
    "use strict";
    console.log(this);
  }
  obj5.logThis = logThis;
  obj5.logThis(); // undefined, undefined, undefined
  
  const a = () => {
    console.log(this)
  }
  a()

  const b = function() {
    console.log(this)
  }
  b()