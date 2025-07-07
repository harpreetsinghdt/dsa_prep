class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}
function arrayToLinkedList(arr) {
  let dummy = new ListNode(0);
  let current = dummy;
  // console.log(current);
  for (const val of arr) {
    current.next = new ListNode(val);
    current = current.next;
  }
  // console.log(current);
  // console.log(dummy.next);
  return dummy.next; // Returns head node
}
let input = [1, 2, 3];
const head1 = arrayToLinkedList(input);

var removeNthFromEnd = function (head, n) {
  const dummy = new ListNode(0, head);
  let slow = dummy,
    fast = dummy;
  for (let i = 0; i <= n; i++) {
    fast = fast.next;
  }

  console.log("fast", fast);
  while (fast) {
    slow = slow.next;
    fast = fast.next;
  }

  slow.next = slow.next.next;
  
  return dummy.next;
};
const res = removeNthFromEnd(head1, (n = 2));

function linkedListToArray(head) {
  const result = [];
  let current = head;

  while (current !== null) {
    result.push(current.val);
    current = current.next;
  }

  return result;
}

console.log(input);
console.log(linkedListToArray(res));
