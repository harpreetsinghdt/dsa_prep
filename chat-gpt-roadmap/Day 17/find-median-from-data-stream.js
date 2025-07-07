class MedianFinder {
  constructor() {
    this.nums = [];
  }

  addNum(num) {
    let left = 0;
    let right = this.nums.length;

    // Binary search for insertion position
    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (this.nums[mid] < num) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }

    this.nums.splice(left, 0, num);
  }

  findMedian() {
    const len = this.nums.length;
    if (len % 2 === 1) {
      return this.nums[Math.floor(len / 2)];
    }
    return (this.nums[len / 2 - 1] + this.nums[len / 2]) / 2;
  }
}
const mf = new MedianFinder();
mf.addNum(1);
mf.addNum(2);
console.log(mf.findMedian()); // 1.5
mf.addNum(3);
console.log(mf.findMedian()); // 2
