/*
206. Reverse Linked List

Given the head of a singly linked list, reverse the list, and return the reversed list.

Example 1:
Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]
Example 2:
Input: head = [1,2]
Output: [2,1]
Example 3:

Input: head = []
Output: []
*/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
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
const head = arrayToLinkedList([1, 2, 3, 4, 5]);

var reverseList = function (head) {
  let prev = null,
    curr = head;
  while (curr != null) {
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
};
console.log(reverseList(head));
