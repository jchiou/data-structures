var BinarySearchTree = function(value) {
  var tree = Object.create(binaryTreeMethods);

  tree.value = value;
  tree.left = null;
  tree.right = null;

  tree.storage = [];
  tree.storage.push(value);
  return tree;
};

var binaryTreeMethods = {};

binaryTreeMethods.insert = function(value) {
  this.storage.push(value);
  
  if (this.value > value && this.left === null) {
    this.left = BinarySearchTree(value);
  } else if (this.value > value && this.left !== null) {
    this.left.insert(value);
  } else if (this.right === null) {
    this.right = BinarySearchTree(value);
  } else {
    this.right.insert(value);
  }

};

binaryTreeMethods.contains = function(value) {
  return this.storage.indexOf(value) > -1;
};

binaryTreeMethods.depthFirstLog = function(fn) {
  this.storage.forEach(function(item) {
    fn(item);
  });
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
