var reduceRight = function(array, iterator, accumulator) {
  if (accumulator === undefined) {
      var lastElement = array.length - 1
      accumulator = array[lastElement]
      array = array.splice(lastElement, 1)
  }
    
  for (var i = array.length - 1; i >= 0; i--) {
      accumulator = iterator(accumulator, array[i]);
  }
    return accumulator;
};
