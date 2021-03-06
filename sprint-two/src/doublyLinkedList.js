var DoublyLinkedList = function(value) {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToHead = function(value) {
    var node = this.makeNode(value);
    if (list.head === null) {
      list.head = node;
      list.tail = node;
    } else {
      var previous = list.head;
      list.head = node;
      list.head.next = previous;
      list.tail.previous = list.head;
    }
  };

  list.removeTail = function() {
    var current = list.tail;
    if (list.tail.previous === null) {
      return list.tail.value;
    }
    list.tail = list.tail.previous;
    list.tail.next = null;
    return list.tail.previous;
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
