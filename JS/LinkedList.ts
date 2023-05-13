let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
  }

  prepend(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
  }

  insert(index, value) {
    if (index === 0) {
      this.prepend(value);
      return;
    }

    if (index >= this.length) {
      this.append(value);
      return;
    }

    const newNode = new Node(value);
    const leader = this.traverseToIndex(index - 1);
    const holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;

    this.length++;
  }

  remove(index) {
    if (index === 0) {
      this.head = this.head.next;
      this.length--;
      return;
    }

    const leader = this.traverseToIndex(index - 1);
    const unwantedNode = leader.next;
    leader.next = unwantedNode.next;

    if (index === this.length - 1) {
      this.tail = leader;
    }

    this.length--;
  }

  circularList(value) {
    let newNode = new Node(value)
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode
    }else {
      this.tail.next = newNode;
      newNode.next = this.head;
    }
    this.length++;
  }

  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;

    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  printList() {
    const listValues = [];
    let currentNode = this.head;

    while (currentNode !== null) {
      listValues.push(currentNode.value);
      currentNode = currentNode.next;
    }

    console.log(listValues.join(" -> "));
  }
}

//create nodes
const header = new Node(10)
const node1 = new Node(50)
const node2 = new Node(30)
const node3 = new Node(40)
const node4 = new Node(50)
const node5 = new Node(40)
const node6 = new Node(90)
const node7 = new Node(50)
const node8 = new Node(30)
const node9 = new Node(40)
header.next = node1
node1.next = node2
node2.next = node3
node3.next = node4
node4.next = node5
node5.next = node6
node6.next = node7
node7.next = node8
node8.next = node9
node9.next = header


//print nodes
function printList(list) {
  console.log(`${list.value}`)
  if (list.next == null || list == null) {
    return;
  }
  printList(list.next)
}

//delete node
function deleteNode(node, prev, current) {
  if (node.value === current.value && node.next !== null) {
    prev.next = node.next;
    return;
  }
  if (node.value === current.value && node.next == null) {
    prev.next = null;
    return;
  }
  if (current.next !== null) {
    prev = current;
    current = current.next;
    deleteNode(node, prev, current)
  }
}

// deleteNode(node2, null, header)
// printList(header)

//delete duplicate nodes
let hashMap = {}
function deleteDuplicate(list, previous) {
  if (hashMap[list.value]) {
    previous.next = list.next;
  } else {
    hashMap[list.value] = true
    previous = list;
  }
  if (list.next !== null) {
    list = list.next
    deleteDuplicate(list, previous)
  }
}

// deleteDuplicate(header, header)
// console.log('------------------------------')
// printList(header)

//find from kth till last node
function travelFrom(kth, list) {
  let index = 0;
  while (list.next !== null) {
    index = index + 1;
    if (index >= kth) {
      console.log(list)
    }
    list = list.next
  }
}

//travelFrom(3, header)

//partition list
function partition(x, current) {
  let linkedList1 = new LinkedList();
  let linkedList2 = new LinkedList();
  while (current.next !== null) {
    if (current.value < x.value) {
      linkedList1.append(current.value)
    } else {
      linkedList2.append(current.value)
    }
    current = current.next
  }
  linkedList1.printList();
  linkedList1.tail.next = linkedList2.head;
  linkedList1.printList();

  linkedList2.printList();
}

//partition(node6, header);


// SUM
function sumInReverseOrder() {
  let num1 = new LinkedList();
  num1.append(6)
  num1.append(1)
  num1.append(7)
  let num2 = new LinkedList();
  num2.append(2)
  num2.append(9)
  num2.append(5)
  let sum1 = new LinkedList();
  let index1 = num1.length - 1;
  let carryForward = 0;
  while (index1 >= 0) {
    let sum = num1.traverseToIndex(index1).value + num2.traverseToIndex(index1).value + carryForward;
    if (sum > 9 && index1 !== 0) {
      carryForward = 1;
      sum = sum - 10;
    }
    sum1.prepend(sum);
    index1 = index1 - 1;
  }
  sum1.printList();
}

//sumInReverseOrder();

//check palindrome
function checkPalindrome(list) {
  let index = 0;
  let isPal = true
  if (list.length % 2 == 0) {
    while (index < list.length / 2) {
      if (list.traverseToIndex(index).value !== list.traverseToIndex(list.length - 1 - index).value) {
        isPal = false;
      }
      index = index + 1;
    }
  } else {
    while (index < list.length / 2 - 1) {
      if (list.traverseToIndex(index).value !== list.traverseToIndex(list.length - 1 - index).value) {
        isPal = false;
      }
      index = index + 1;
    }
  }
  return isPal;
}

let pallist = new LinkedList();
pallist.append('A')
pallist.append('B')
pallist.append('D')
pallist.append('E')
pallist.append('F')
pallist.circularList('G')
// console.log(pallist.printList())

//CIRCULAR LINKED LIST
function findFirstNode(list) {

  let index = 0;
  while (index <= list.length) {
    if (index == list.length) {
      console.log(list.traverseToIndex(index - 1));
      console.log(list.traverseToIndex(0));
    }
    index = index + 1;
  }
}
findFirstNode(pallist);