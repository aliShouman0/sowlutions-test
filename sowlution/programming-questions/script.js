//problem 1 o(n)
const validateEmail = (email) => {
  if (email.length > 256 || email.length == 0) return false;

  let containAt = false;
  let atIndex = -1;
  for (let i = 0; i < email.length; i++) {
    //check if email contain "@" and avoid be at the first or last index
    if (email[i] === "@" && i != 0 && i != email.length - 1) {
      //if exist 2 or more @ return false
      if (containAt) return false;
      containAt = true;
      atIndex = i;
    }

    //check if email contain "." after the "@" but not  immediately after it
    if (email[i] === "." && containAt) {
      if (i === atIndex + 1) return false;
      if (email.substring(i + 1, email.length) == "com") return true;
    }
  }
  return false;
};

//testing validateEmail
const testingIsValidEmail = () => {
  console.log("----------testing isValidEmail-------------");
  console.log("john.doe@gmail.com true", validateEmail("john.doe@gmail.com")); // Returns true
  console.log("john@doe@gmail.com false", validateEmail("john@doe@gmail.com")); // Returns false
  console.log("john@gmail.c false", validateEmail("john@gmail.c")); // Returns false
  console.log("john@.com false", validateEmail("john@.com")); // Returns false
  console.log("----------my test-------------");
  console.log("", validateEmail("")); // Returns false
  console.log("@.com false", validateEmail("@.com")); // Returns false
  console.log("john.com@ false", validateEmail("john.com@")); // Returns false
  console.log("----------end testing-------------");
};

// testingIsValidEmail()

//---------------------------------------
//problem 2 o(n^2)
//---------------------------------------

const twoArrays = (array) => {
  //Initializing  countArray that will be like hashmap/table or associative array
  let countArray = [];
  //loop over array the value will be the key of  associative array and the value is nb of occurrences
  for (let i = 0; i < array.length; i++) {
    let value = array[i];
    if (!countArray[value]) countArray[value] = 1;
    else countArray[value] += 1;
  }

  //loop through countArray and repeating each integer the number of times specified in countArray.
  let sortedArray = [];
  for (const key in countArray) {
    for (var i = 0; i < countArray[key]; i++) sortedArray.push(key);
  }

  //print result
  console.log("countArray ", countArray);
  console.log();
  console.log("sortedArray ", sortedArray);
};

//testing TwoArrays
const testingTwoArrays = () => {
  console.log("----------testing TwoArrays-------------");
  twoArrays([1, 2, 2, 3, 3, 3, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 5, 5, 5, 5]);
  console.log("----------end testing-------------");
};

// testingTwoArrays();

//---------------------------------------
//Problem 3
//---------------------------------------

//constructor to create node
function ListNode(val, next = undefined) {
  this.val = val;
  this.next = next;
}

const isEmpty = (node) => {
  return node.next == undefined && node.val == undefined;
};

const addNode = (list, val) => {
  let currNode = list;
  //if first node empty add to it
  if (currNode.val == undefined) {
    currNode.val = val;
    return;
  }
  //travel to last node to add the node
  while (currNode.next) currNode = currNode.next;
  currNode.next = new ListNode(val);
};

//remove node at index
const removeNode = (list, index) => {
  if (isEmpty(list)) return;
  let currNode = list;
  let nextNode = currNode.next;
  let currIndex = 0;

  //if need to remove first node
  if (index == 0) {
    // list = currNode.next;
    // currNode.next = undefined;
    while (nextNode) {
      currNode.val = nextNode.val;
      currNode = currNode.next;
      nextNode = currNode.next;
    }
    return;
  }

  //travel until find the target index -1
  while (currIndex != index - 1 && currNode) {
    currNode = currNode.next;
    nextNode = currNode.next;
    currIndex++;
  }
  //if currIndex>size return error
  if (!currNode.next) {
    console.error("wrong Index");
    return;
  }
  //remove node at index and fix the next node
  currNode.next = nextNode.next;
  nextNode.next = undefined;
};

//remove node where value > x
const removeNodes = (list, x) => {
  let currNode = list;
  let index = 0;
  while (currNode) {
    if (currNode.val > x) {
      removeNode(list, index);
      removeNodes(list, x);
      return;
    }
    index++;
    currNode = currNode.next;
  }
};

//testing ListNode

const list = new ListNode();
addNode(list, 0);
addNode(list, 1);
addNode(list, 2);
addNode(list, 40);
addNode(list, 465);
addNode(list, 3);

// removeNode(list, 4);
removeNodes(list, 7);

console.log(list);

//end testing of ListNode

//---------------------------------------
//problem 4 o(n)
//---------------------------------------

const checkBracket = (str) => {
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    //every open bracket will inserted to a stack
    if (["(", "{", "["].includes(str[i])) {
      stack.push(str[i]);
    } else {
      //if get an close bracket must pop from stack and match with each others
      if ([")", "}", "]"].includes(str[i]) && stack.length == 0) return false;
      switch (str[i]) {
        case ")":
          if (stack.pop() != "(") return false;
          break;

        case "]":
          if (stack.pop() != "[") return false;
          break;

        case "}":
          if (stack.pop() != "{") return false;
          break;
        default:
          continue;
      }
    }
  }
  //if stack not empty then one of the bracket not closed
  if (stack.length != 0) return false;
  return true;
};

//testing checkBracket
const testingCheckBracket = () => {
  console.log("----------testing checkBracket-------------");
  console.log("()[]{} true", checkBracket("()[]{}"));
  console.log("()[]{} true", checkBracket("([{}])"));
  console.log("()[]{} false", checkBracket("("));
  console.log("()[]{} false", checkBracket("[(])"));
  console.log("()[]{} false", checkBracket("{[}]"));
  console.log("()[]{} false", checkBracket("{[}]"));

  console.log("----------end testing-------------");
};
testingCheckBracket();
