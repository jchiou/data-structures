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
};

treeMethods.contains = function(target) {
  var result = false;

  if (this.value === target) {
    result = true;
  }

  if (this.children.length > 0) {
    debugger;
    for (var i = 0; i < this.children.length; i++) {
      var theChild = this.children[i].children;
      result = this.contains(theChild);
    }
  }

  return result;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
