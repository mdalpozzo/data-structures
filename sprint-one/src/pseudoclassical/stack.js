var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.count = Object.keys(this.storage).length;
};

Stack.prototype.pop = function() {
  var item;
  if (this.count === 0) {
    return;
  } else {
    item = this.storage[this.count - 1];
    delete this.storage[this.count - 1];
    this.count--;
  }
  return item;
};

Stack.prototype.push = function(value) {
  this.storage[this.count] = value;
  this.count++;
};

Stack.prototype.size = function() {
  return this.count;
};

var stack = new Stack();