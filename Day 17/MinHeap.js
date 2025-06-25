class MinHeap {
  constructor() {
    this.heap = [];
  }

  insert(val) {
    this.heap.push(val);
    this.bubbleUp();
  }

  bubbleUp() {
    let idx = this.heap.length - 1;
    while (idx > 0) {
      let parent = Math.floor((idx - 1) / 2);
      if (this.heap[parent] <= this.heap[idx]) break;
      [this.heap[parent], this.heap[idx]] = [this.heap[idx], this.heap[parent]];
      idx = parent;
    }
  }

  extractMin() {
    const min = this.heap[0];
    const end = this.heap.pop();
    if (this.heap.length) {
      this.heap[0] = end;
      this.sinkDown(0);
    }
    return min;
  }

  sinkDown(i) {
    const length = this.heap.length;
    let smallest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;
    if (left < length && this.heap[left] < this.heap[smallest]) smallest = left;
    if (right < length && this.heap[right] < this.heap[smallest])
      smallest = right;
    if (smallest !== i) {
      [this.heap[i], this.heap[smallest]] = [this.heap[smallest], this.heap[i]];
      this.sinkDown(smallest);
    }
  }
}

function topKFrequent(nums, k) {
  const freq = new Map();
  for (let n of nums) freq.set(n, (freq.get(n) || 0) + 1);

  const minHeap = [];
  for (let [num, count] of freq) {
    minHeap.push([count, num]);
    minHeap.sort((a, b) => a[0] - b[0]); // mimic min-heap
    if (minHeap.length > k) minHeap.shift();
  }

  return minHeap.map(([count, num]) => num);
}
const nums = [5, 6, 1, 1, 1, 2, 2, 9],
  k = 2;
const res = topKFrequent(nums, k);
console.log(res);
