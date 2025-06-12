class Queue {
  constructor(capacity) {
    this.items = [];
    this.front = 0;
    this.rear = 0;
    this.count = 0;
    this.capacity = capacity;
  }
  enqueue(element) {
    if (this.isFull()) {
      console.log("Queue is full");
      return;
    }
    this.items[this.rear] = element;
    console.log(`${element} added to position ${this.rear} in queue.`);
    this.rear = (this.rear + 1) % this.capacity;
    this.count++;
    return this.count - 1;
  }
  dequeue() {
    if (this.count == 0) return null;
    let removeItem = this.items[this.front];
    console.log(`${removeItem} removed from position ${this.front} in queue.`);
    this.front = (this.front + 1) % this.capacity;
    this.count--;
    return removeItem;
  }
  peek() {
    console.log(
      `Currently, Top element at position ${this.rear - 1} is ${
        this.items[this.rear - 1]
      } in queue.`
    );
    return this.items[this.rear - 1];
  }
  isEmpty() {
    console.log(this.count == 0 ? "Queue is empty" : "Queue is not empty");
    return this.count == 0;
  }
  isFull() {
    return this.capacity === this.count;
  }
  size() {
    console.log(`Current queue size is ${this.count}`);
    return this.count;
  }
  print() {
    if (this.count == 0) return "Queue is empty";
    let str = "";
    for (let index = this.front; index < this.count; index++) {
      str += this.items[index] + " ";
    }
    return str !== "" ? `Current queue items: ${str}` : "Queue is empty";
  }
  clear() {
    this.items = [];
    this.front = 0;
    this.rear = 0;
    this.count = 0;
    console.log(`Queue cleared`);
    return this.items;
  }
}

const queue = new Queue(5);
console.log(queue.print());
queue.enqueue(100);
queue.enqueue(101);
queue.enqueue(102);
queue.enqueue(103);
queue.enqueue(104);
queue.enqueue(105);
console.log(queue.isFull());
queue.peek();
queue.isEmpty();
queue.size();
console.log(queue.print());
queue.dequeue();
queue.enqueue(103);
queue.dequeue();
queue.size();
console.log(queue.print());
queue.clear();
queue.size();
console.log(queue.print());
