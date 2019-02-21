var Queue = function() {
  var someInstance = {};

  // create a global count that stores the property name as a number
  someInstance.count = 0; 
  // Declare a global count to keep track of size
  someInstance.lowestCount = 0;
   
  // Use an object with numeric keys to store values
  var storage = {};
  // assign storage as a property of someInstance
  someInstance.storage = storage; 


  // Implement the methods below

  someInstance.enqueue = function(value) {
    // add value to the queue 
    // increment count  
    if (value) {
      someInstance.storage[someInstance.count] = value;
      // increment the starting index by one
      someInstance.count++;
      return someInstance;
    }
  };

  someInstance.dequeue = function() {
    // save node to delete in var  
    // Delete node 
    // Increment lowest count 
    // Return saved node
    if (someInstance.count - 0 === 0) {
      return undefined;
    } 

    var result = someInstance.storage[someInstance.lowestCount];
    delete someInstance.storage[someInstance.lowestCount];
    someInstance.lowestCount++;
    return result; 
  };

  someInstance.size = function() {
    if (!someInstance.size) {
      someInstance.size = 0;
    } else {
      someInstance.size = someInstance.count - someInstance.lowestCount;
      if (someInstance.size < 0) {
        someInstance.size = 0;
      }
    } 
    return someInstance.size;
  };
  return someInstance;
};