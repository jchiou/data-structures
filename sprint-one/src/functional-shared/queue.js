var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {};
  instance.counter = 0;
  instance.storage = [];
  _.extend(instance, queueMethods);
  return instance;
};

var queueMethods = {};

queueMethods.size = function() {
  return this.counter;
};

queueMethods.enqueue = function(val) {
  this.storage.push(val);
  this.counter++;
  return this.counter;
};

queueMethods.dequeue = function() {

};





