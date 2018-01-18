class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.count = Object.keys(this.storage).length;
  }

  push(value) {
    this.storage[this.count] = value;
    this.count++;
  }

  pop() {
    var item;
    if (this.count === 0) {
      return;
    } else {
      item = this.storage[this.count - 1];
      delete this.storage[this.count - 1];
      this.count--;
    }

    return item;
  }

  size() {
    return this.count;
  }

}

var stack = new Stack();