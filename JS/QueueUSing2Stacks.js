let stackOne = [];
let stackTwo = [];

function pushToQueue(value) {
    stackOne.push(value);
}

function popFromQueue() {
    stackTwo.pop();
}

function reverseStackTwo(){
    const length = stackOne.length
    for(let index = 0; index < length ; index = index + 1){
        stackTwo.push(stackOne.pop())
    }
}

function printQueue(){
    reverseStackTwo();
    console.table(stackTwo)
}

pushToQueue(1);
pushToQueue(2);
pushToQueue(3);
pushToQueue(4);
pushToQueue(5);
pushToQueue(6);
pushToQueue(7);
pushToQueue(8);
pushToQueue(9);
pushToQueue(10);

printQueue();

popFromQueue();
printQueue();

popFromQueue();
printQueue();

popFromQueue();
printQueue();