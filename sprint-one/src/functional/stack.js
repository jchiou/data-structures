var Stack = function() {
  var someInstance = {};
  var key = 0;
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    storage[key] = value;
  };

  someInstance.pop = function() {
  };

  someInstance.size = function() {
    return key;
  };

  return someInstance;
};
