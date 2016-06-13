

// Instantiate a new graph
var Graph = function() {
  this.node = [];
  this.edges = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  return this.node.push(node);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.node.indexOf(node) > -1;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  var index = this.node.indexOf(node);
  this.node.splice(index, 1);

};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return this.edges.some(function(edge) {
    return edge[0] === fromNode && edge[1] === toNode || edge[0] === toNode && edge[1] === fromNode;
  });
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.edges.push([fromNode, toNode]);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var index = this.edges.forEach(function(node, i) {
    if (node[0] === fromNode && node[1] === toNode) {
      return i;
    }
  });

  this.edges.splice(index, 1);

};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  this.node.forEach(function(child) {
    cb(child);
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


