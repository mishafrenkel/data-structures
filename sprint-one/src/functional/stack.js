var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  // Assign storage to someInstance  
  someInstance.storage = storage;
  someInstance.count = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    someInstance.storage[someInstance.count] = value;
    someInstance.count++;
  };

  someInstance.pop = function() {
    // Check to see if the stack is empty 
    if (someInstance.count === 0) {
      return undefined; 
    } else {
      someInstance.count--;
      var result = someInstance.storage[someInstance.count];  //#endregion
      delete someInstance.storage[someInstance.count];
      return result;
    }
  };

  someInstance.size = function() {
    return someInstance.count;
  };

  

  return someInstance;
};

