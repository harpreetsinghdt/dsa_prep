import { MaxPriorityQueue } from "@datastructures-js/priority-queue";

// Create queue
const maxQueue = new MaxPriorityQueue();

// Enqueue elements
maxQueue.enqueue("task1", 3);
maxQueue.enqueue("task2", 1);
maxQueue.enqueue("task3", 2);

// Dequeue highest priority
console.log(maxQueue.dequeue()); // { priority: 3, element: 'task1' }

function topKFrequent(nums, k) {
  const frequencyMap = new Map();
  const maxHeap = new MaxPriorityQueue();
  const result = [];
  for (const num of nums) {
    frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
  }
  for (const [num, freq] of frequencyMap) {
    maxHeap.enqueue(num, freq);
  }
  for (let i = 0; i < k; i++) {
    result.push(maxHeap.dequeue().element);
  }
  return result;
}
const nums = [5, 6, 1, 1, 1, 2, 2, 2, 9],
  k = 2;
const res = topKFrequent(nums, k);
