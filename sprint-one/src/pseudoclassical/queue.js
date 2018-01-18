var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.count = Object.keys(this.storage).length;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.count] = value;
  this.count++;
};

Queue.prototype.dequeue = function() {
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
};

Queue.prototype.size = function() {
  return this.count;
};

var stack = new Stack();