class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.count = Object.keys(this.storage).length;
  }

  enqueue(value) {
    this.storage[this.count] = value;
    this.count++;
  }

  dequeue() {
    var item;
    if (this.count === 0) {
      return;
    } else {
      item = this.storage[0];
      delete this.storage[0];
      this.count--;
      for (var key in this.storage) {
        this.storage[Number.parseInt(key, 10) - 1] = this.storage[key];
      }
    }
    
    return item;
  }

  size() {
    return this.count;
  }
}

var queue = new Queue();