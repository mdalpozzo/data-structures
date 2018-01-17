var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = Object.keys(storage).length;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[count] = value;
    count++;
  };

  someInstance.dequeue = function() {
    var item;
    if (count === 0) {
      return;
    } else {
      item = storage[0];
      delete storage[0];
      count--;
      for (var key in storage) {
        if (!isNaN(Number.parseInt(key, 10))) {
          storage[Number.parseInt(key, 10) - 1] = storage[key];
        }
      }
      return item;
    }
  };

  someInstance.size = function() {
    return count;
  };

  return someInstance;
};
