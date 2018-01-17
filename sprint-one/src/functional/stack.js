var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = Object.keys(someInstance).length;

  // Implement the methods below
  someInstance.push = function(value) {
    someInstance[count] = value;
    count++;
  };

  someInstance.pop = function() {
    var item;

    if (count === 0) {
      return;
    } else {
      item = someInstance[count - 1];
      delete someInstance[count - 1];
      count--;
      return item;
    }
  };

  someInstance.size = function() {
    return count;
  };

  return someInstance;
};
