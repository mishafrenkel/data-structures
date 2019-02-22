// head     tail
//  ↓         ↓
// 12 → 99 → 37 → ∅
// const list = {
//     head: → { value: 12, next: ⤵ }
//             { value: 99, next: ⤵ }
//     tail: → { value: 37, next: ∅ }
// };
var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var node = Node(value);
    if (!list.head) {
      list.head = node;
      list.tail = node;
    } else {
      list.tail.next = node;
      list.tail = node;
    }
  };

  list.removeHead = function() {
    var oldHead = list.head;
    list.head = oldHead.next;
    return oldHead.value;
  };

  list.contains = function(target) {
    var current = list.head;
    while (current) {
      if (current.value === target) {
        return true;
      } 
      current = current.next;
    }
    return false;
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
 * Complexity: What is the time complexity of the above functions? //#endregion
 Constant time is maintained for adding, removal. Linked list will have  
 an average time complexity of O(n) with a an O(1) for insertion and deletion.
 */


