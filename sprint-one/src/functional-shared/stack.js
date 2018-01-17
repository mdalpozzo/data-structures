var Stack = function() {
// Hey! Rewrite in the new style. Your code will wind up looking very similar,
// but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};
  someInstance.count = Object.keys(someInstance.storage).length;

  _.extend(someInstance, stackMethods);


  return someInstance;
};

var stackMethods = {
  push: function(value) {
    this.storage[this.count] = value;
    this.count++;
  },
  pop: function() {
    var item;
    if (this.count === 0) {
      return;
    } else {
      item = this.storage[this.count - 1];
      delete this.storage[this.count - 1];
      this.count--;
    }
    return item;
  },
  size: function() {
    return this.count;
  }
};


