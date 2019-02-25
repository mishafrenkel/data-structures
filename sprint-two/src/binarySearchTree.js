/*
 * Complexity: What is the time complexity of the above functions?
 */
var BinarySearchTree = function(value) {
  var someInstance = {};
  someInstance.value = value;
  someInstance.left = null;
  someInstance.right = null;
  Object.assign(someInstance, binarySearchTreeMethods);
  return someInstance;
};
  
var binarySearchTreeMethods = {}; 
  
binarySearchTreeMethods.insert = function(value) {
  if (value >= this.value) {
    if (this.right) {
      this.right.insert(value);
    } else {
      this.right = BinarySearchTree(value);
    }
  } else {
    if (this.left) {
      this.left.insert(value);
    } else {
      this.left = BinarySearchTree(value);
    }
  }
};
  
binarySearchTreeMethods.contains = function(value) {
  if (this.value === value) {
    return true;
  } else if (value >= this.value) {
    if (this.right) {
      return this.right.contains(value);
    } else {
      return false;
    }  
  } else {
    //return this.left && this.left.contains(value)
    if (this.left) {
      return this.left.contains(value);
    } else {
      return false;
    } 
  }
};
  
binarySearchTreeMethods.depthFirstLog = function(callback) {
  callback(this.value);
  if (this.left) {
    this.left.depthFirstLog(callback);
  }
  if (this.right) {
    this.right.depthFirstLog(callback);
  }
};
  
binarySearchTreeMethods.depthFirstLog = function(callback) {
  callback(this.value);
  this.left && this.left.depthFirstLog(callback);
  this.right && this.right.depthFirstLog(callback);
};
  
/*
 * Complexity: What is the time complexity of the above functions?
 - insert(value): O(1)
 - contains(value): O(log(n))
 - depthFirstLog(cb): O(n)
 */
  
