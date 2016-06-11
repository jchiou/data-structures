

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (!Array.isArray(index)) {
    this._storage[index] = [];
    this._storage[index].push([k, v]);
  } else {
    this._storage[index].push([k, v]);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var value;

  this._storage[index].forEach(function(pair) {
    if (pair[0] === k) {
      value = pair[1];
      console.log(pair);
    }
  });
  console.log(value);
  return value;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //this._storage[index][1] = undefined;
  this._storage[index].forEach(function(pair, i) {
    if (pair[0] === k) {
      pair.splice(i, 1);
    }
  });
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


