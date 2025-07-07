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
const head = arrayToLinkedList([3, 2, 0, -4]);

var hasCycle = function (head) {
  let slow = head,
    fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) return true;
  }
  return false;
};
console.log(hasCycle(head));
