var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = [];
};

Queue.prototype.size = function() {
  return this.storage.length;
};

Queue.prototype.enqueue = function(val) {
  return this.storage.push(val);
};

Queue.prototype.dequeue = function() {
  return this.storage.shift();
};
