var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {};
  instance.storage = [];
  instance.counter = 0;
  _.extend(instance, stackMethods);
  return instance;
};

var stackMethods = {};

stackMethods.size = function() {
  return this.counter;
};

stackMethods.push = function(value) {
  this.storage.push(value);
  this.counter++;
  return this.counter;
}

stackMethods.pop = function() {
  return;
}
