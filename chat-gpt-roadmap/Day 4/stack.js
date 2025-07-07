class Stack {
  constructor() {
    this.items = [];
    this.count = 0;
  }
  // Stack: Add element to top
  push(element) {
    this.items[this.count] = element;
    console.log(`${element} added to position ${this.count} in stack.`);
    this.count++;
    return this.count - 1;
  }
  // Stack: remove element from top and return, return undefined in case stack is empty.
  pop() {
    if (this.count == 0) return undefined;
    let removeItem = this.items[this.count - 1];
    console.log(
      `${removeItem} removed from position ${this.count - 1} in stack.`
    );
    this.count -= 1;
    return removeItem;
  }
  // Stack: check top element
  peek() {
    console.log(
      `Currently, Top element at position ${this.count - 1} is ${
        this.items[this.count - 1]
      } in stack.`
    );
    return this.items[this.count - 1];
  }
  // Stack: check if empty
  isEmpty() {
    console.log(this.count == 0 ? "Stack is empty" : "Stack is not empty");
    return this.count == 0;
  }
  // Stack: check stack size
  size() {
    console.log(`Current stack size is ${this.count}`);
    return this.count;
  }

  // Stack: print the all elements
  print() {
    let str = "";
    for (let index = 0; index < this.count; index++) {
      str += this.items[index] + " ";
    }
    return str != "" ? `Current stack items: ${str}` : "Stack is empty";
  }
  // Stack: clear all elements
  clear() {
    this.items = [];
    this.count = 0;
    console.log(`Stack cleared`);
    return this.items;
  }
}

const stack = new Stack();
console.log(stack.print());
stack.push(100);
stack.push(101);
stack.pop();
stack.push(102);
stack.size();
console.log(stack.print());
stack.peek();
stack.pop();
stack.isEmpty();
stack.push(103);
stack.peek();

stack.size();
console.log(stack.print());
stack.clear();
stack.size();
console.log(stack.print());
