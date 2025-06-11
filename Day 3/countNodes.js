class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}
// const node3 = new ListNode(3);
// const node2 = new ListNode(2, node3);
// const node1 = new ListNode(1, node2);
// const head = node1;

function arrayToLinkedList(arr) {
  let dummy = new ListNode(0);
  let current = dummy;
  // console.log(current);
  for (const val of arr) {
    current.next = new ListNode(val);
    current = current.next;
  }
  // console.log(current);
  console.log(dummy.next);
  return dummy.next; // Returns head node
}

// Create: 5 -> 10 -> 15 -> null
const head = arrayToLinkedList([1, 2, 3, 4, 5]);

// console.log(head);

var countNodes = function (head) {
  let count = 0;
  // console.log(head);
  if (head == null) {
    return "List is empty.";
  }
  let current = head;
  while (current !== null) {
    count++;
    current = current.next;
  }
  return count;
};

// console.log(countNodes());
console.log(countNodes(head));
