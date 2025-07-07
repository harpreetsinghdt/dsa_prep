var MyQueue = function () {
  this.stack = [];
  this.tempStack = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.stack.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  if (this.tempStack.length === 0) {
    while (this.stack.length > 0) {
      this.tempStack.push(this.stack.pop());
    }
  }
  return this.tempStack.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  if (this.tempStack.length === 0) {
    while (this.stack.length > 0) {
      this.tempStack.push(this.stack.pop());
    }
  }

  return this.tempStack[this.tempStack.length - 1];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return this.stack.length === 0 && this.tempStack.length === 0;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 */
var obj = new MyQueue();
obj.push(1);
obj.push(2);
var param_3 = obj.peek();
var param_2 = obj.pop();
var param_4 = obj.empty();
console.log(param_2);
console.log(param_3);
console.log(param_4);
