var Stack = function() {
  this._storage = [];
};

Stack.prototype.add = function(value) {
    return this._storage.push(value);
}

Stack.prototype.remove = function(value) {
    var index = this._storage.indexOf(value)
    return this._storage.splice(index, 1);
}

Object.keys(Stack())