var makeHashTable = function() {
  //Do not change the max!
  var max = 4;

  return {
    _storage: [],

    retrieve: function(key) {
      var value;
      this._storage[hashFn(key, max)].forEach(function(tuple) {
          if (tuple[0] === key) {
            value = tuple[1];
              
          }
      })
      return value;
    },

    insert: function(key, value) {
      if (!Array.isArray(this._storage[hashFn(key, max)])) {
          this._storage[hashFn(key, max)] = [];
          this._storage[hashFn(key, max)].push([key, value]);
      } else {
          this._storage[hashFn(key, max)].push([key, value]);
      }
    }
  }
};

// This is a "hashing function". You don't need to worry about it, just use it to turn any key into a pseudo-random key
var hashFn = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    var letter = str[i];
    hash = (hash << 5) + letter.charCodeAt(0);
    hash = (hash & hash) % max;
  }
  return hash;
};

