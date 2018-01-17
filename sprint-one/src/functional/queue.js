var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = Object.keys(someInstance).length;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    someInstance[count] = value;
    count++;
  };

  someInstance.dequeue = function() {
    var item;
    if (count === 0) {
      return;
    } else {
      item = someInstance[count - 1];
      delete someInstance[count - 1];
      count--;
      for (var key in someInstance) {
        key = Number.parseInt(key, 10) - 1
      }
    }
    return item;
  };

  someInstance.size = function() {
    return count;
  };

  return someInstance;
};
