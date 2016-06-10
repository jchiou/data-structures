var Tree = function(value) {
  var newTree = Object.create(treeMethods);
  newTree.value = value;

  // your code here
  newTree.children = []; 

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Object.create(Tree(value)));
  this.value = value;
};

treeMethods.contains = function(target) {
  if (this.value === target) {
    return true;
  }

  // if (this.children.length > 0) {
  //   for (var i = 0; i < this.children.length; i++) {
  //     var theChild = this.children[i];
  //     this.contains(theChild);
  //   }
  // }

  if (this.children.length === 0) {
    return false;
  }

  return false;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
