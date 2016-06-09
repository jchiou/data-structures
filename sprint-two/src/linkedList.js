var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = list.makeNode(value);
    if (list.head === null) {
      list.head = newNode;
      list.tail = newNode;
    }
    if (list.tail !== null) {
      var current = list.tail;
      current.next = newNode;
    }
    list.tail = newNode;
    return list.tail;
  };

  list.removeHead = function() {
    var current = list.head;
    list.head = list.head.next;
    return current.value;
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
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
