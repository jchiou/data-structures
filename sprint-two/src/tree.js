var Tree = function(value) {
  var newTree = Object.create(treeMethods);
  newTree.value = value;
  newTree.children = []; 

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Object.create(Tree(value)));
  this.value = value;
};

treeMethods.contains = function(target) {

  //var child = this;

  // if (this.value === target) {
  //   return true;
  // }

  // if (child.children.length !== undefined) {
  //   for (var i = 0; i < child.children.length; i++) {
  //     results = this.contains(target, child.children[i]);
  //     if (this.contains(target, child.children[i]) === true) {
  //       return true;
  //     }
  //   }
  // }

  //if (child.children.length !== undefined) {
  // return this.children.some(function(child) {
  //   return child.contains(target);
  // });

  return this.value === target ? true : this.children.some((child) => child.contains(target));

};

/*
 * Complexity: What is the time complexity of the above functions?
 */
