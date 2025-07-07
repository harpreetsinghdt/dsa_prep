class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

function mergeKLists(lists) {
  if (lists.length === 0) return null;

  // Merge lists in pairs until one list remains
  while (lists.length > 1) {
    const mergedLists = [];
    for (let i = 0; i < lists.length; i += 2) {
      const l1 = lists[i];
      const l2 = i + 1 < lists.length ? lists[i + 1] : null;
      mergedLists.push(mergeTwoLists(l1, l2));
    }
    lists = mergedLists;
  }

  return lists[0];
}

function mergeTwoLists(l1, l2) {
  const dummy = new ListNode();
  let current = dummy;

  while (l1 && l2) {
    if (l1.val < l2.val) {
      current.next = l1;
      l1 = l1.next;
    } else {
      current.next = l2;
      l2 = l2.next;
    }
    current = current.next;
  }

  current.next = l1 || l2;
  return dummy.next;
}
const lists = [
  [1, 4, 5],
  [1, 3, 4],
  [2, 6],
];
console.log(mergeKLists(lists));
