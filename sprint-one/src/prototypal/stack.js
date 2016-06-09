var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.]
  var instance = Object.create(stackMethods);
  instance.storage = [];
  return instance;
};

var stackMethods = {};

stackMethods.size = function() {
  return this.storage.length;
};

stackMethods.push = function(val) {
  this.storage.push(val);
  return this.storage.length;
};

stackMethods.pop = function() {
  return this.storage.pop();
};
