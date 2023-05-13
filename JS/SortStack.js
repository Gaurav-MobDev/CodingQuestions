let stack = [5, 6, 7, 1, 8, 9, 10, 11, 12, 13, 14, 15, 3];
let stackCopy = [];
let tempStack = [];
function sortedStack() {
    let length = stack.length - 1;
    while(length >= 0){
        if(stackCopy.length == 0){
            stackCopy.push(stack.pop())
        }else{
            sortStack(stack.pop());
        }
        length--;
    }
   
    console.log(stackCopy);
}

function sortStack(value) {
  let lastIndex = stackCopy.length - 1;
  while (value < stackCopy[lastIndex] && lastIndex >= 0) {
    tempStack.push(stackCopy.pop());
    lastIndex--;
  }
  stackCopy.push(value);
  let tempStackIndex = tempStack.length - 1;
  while (tempStackIndex >= 0) {
    stackCopy.push(tempStack.pop());
    tempStackIndex--;
  }
}


sortedStack();