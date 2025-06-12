var MyStack = function () {
  this.queue = [];
  this.tempQueue = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  this.queue.push(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
  while (this.queue.length > 1) {
    this.tempQueue.push(this.queue.shift());
  }
  const popped = this.queue.shift();
  [this.queue, this.tempQueue] = [this.tempQueue, this.queue];
  return popped;
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
  while (this.queue.length > 1) {
    this.tempQueue.push(this.queue.shift());
  }
  const top = this.queue[0];
  this.tempQueue.push(this.queue.shift());
  [this.queue, this.tempQueue] = [this.tempQueue, this.queue];
  return top;
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  return this.queue.length === 0;
};

/**
 * Your MyStack object will be instantiated and called as such:
 *  */
var obj = new MyStack();
obj.push(1);
obj.push(2);
var param_3 = obj.top();
var param_2 = obj.pop();
var param_4 = obj.empty();
console.log(param_2);
console.log(param_3);
console.log(param_4);
