var DoublyLinkedList = function(value) {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToHead = function(value) {
    if (list.head === null) {
      var node = new makeNode(value);
      list.head = node;
      list.tail = node;
      node.next = list.tail;
      node.previous = list.head;
    }
  };

  list.removeTail = function() {

  };

  list.contains = function(target) {
    var current = list.head;
    
    while (current.value) {
      if (current.value === target) {
        return true;
      } else {
        current = current.next;
        if (current === null) {
          return false;
        }
      }
    }
  };

  list.makeNode = function(value) {
    var node = new Node(value);
    if (list.head === null) {
      list.head = node;
    }
    return node;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.previous = null;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
