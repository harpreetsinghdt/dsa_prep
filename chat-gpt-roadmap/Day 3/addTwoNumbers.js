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
  console.log(dummy.next);
  return dummy.next; // Returns head node
}
const head1 = arrayToLinkedList([2, 4, 3]);
const head2 = arrayToLinkedList([5, 6, 4]);

var addTwoNumbers = function (l1, l2) {
  const dummy = new ListNode(0);
  let curr = dummy,
    carry = 0;
  while (l1 || l2 || carry) {
    const sum = (l1?.val || 0) + (l2?.val || 0) + carry;
    carry = Math.floor(sum / 10);
    curr.next = new ListNode(sum % 10);
    curr = curr.next;
    l1 = l1?.next;
    l2 = l2?.next;
  }
  return dummy.next;
};
console.log(addTwoNumbers(head1, head2));
