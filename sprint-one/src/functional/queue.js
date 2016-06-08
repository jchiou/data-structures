/*var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var counter = 0;
  var first;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[counter] = value;
    counter++;
  };

  someInstance.dequeue = function() {
    if (counter !== 0) {
      //var keys = Object.keys(storage);
      //first = counter - keys.length;
      first = storage[0];
      delete storage[0];
      console.log(storage);
      counter--;
      return first;
    }
  };

  someInstance.size = function() {
    return counter;
  };

  return someInstance;
};*/
var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = [];
  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage.push(value);
  };

  someInstance.dequeue = function() {
    if (storage.length !== 0) {
      //storage = storage.slice(1);
      return storage.shift();
    }
  };

  someInstance.size = function() {
    return storage.length;
  };

  return someInstance;
};