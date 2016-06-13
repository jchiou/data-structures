var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = [];
};

Stack.prototype.size = function() {
  return this.storage.length;
};

Stack.prototype.push = function(val) {
  return this.storage.push(val);
};

Stack.prototype.pop = function() {
  if (this.storage.length !== 0) {
    return this.storage.pop();
  }
};

