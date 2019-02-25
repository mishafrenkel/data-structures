

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // If nothing defined, use get method to set an initial storage
  if (this._storage.get(index) === undefined) {
    this._storage.set(index, []); 
  }
  // Use get to return the storage and store in a var 
  var storageRef = this._storage.get(index);
  var targetIndex = -1;

  for (var i = 0; i < storageRef.length; i++) {
    // find tuple
    if (storageRef[i][0] === k) {
      targetIndex = i;
    }
  }

  if (targetIndex >= 0) {
    storageRef[targetIndex][1] = v;
  } else {
    storageRef.push([k, v]);
  }

  this._storage.set(index, storageRef);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var storageRef = this._storage.get(index);
  
  for (var i = 0; i < storageRef.length; i++) {
    if (storageRef[i][0] === k) {
      return storageRef[i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var storageRef = this._storage.get(index);
  var targetIndex = -1;

  for (var i = 0; i < storageRef.length; i++) {
    if (storageRef[i][0] === k) {
      targetIndex = i;
    }
  }
  if (targetIndex >= 0) {
    storageRef.splice(targetIndex, 1);
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 - insert: O(n)
 - retreive: 0(n)
 - remove: O(n)
 */


