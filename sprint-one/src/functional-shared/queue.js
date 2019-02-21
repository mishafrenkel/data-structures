var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  
  // initiate a variable someInstance with an empty object literal
  var someInstance = _.extend({}, queueMethods);
  // set the initial count to 0 
  someInstance.count = 0;
  // set the lowestCount to 0 which will be used to adjust count variable when an item gets delete
  someInstance.lowestCount = 0;

  // define a storage empty object and set it as a property on someInstance 
  someInstance.storage = {};
  // return the someInstance so it can be generated as an instance everytime function runs 
  // invoke the helper function to extend the methods found in someMethods onto the someInstance object 
  // extend(someInstance, queueMethods);
  return someInstance;
};


// Define methods for enqueue, dequeue, size 
var queueMethods = {
  enqueue: function(value) {
    if (value) {
      this.storage[this.count] = value; 
      this.count++;
      return this;
    }
  },
  dequeue: function() {
    if (this.count - this.lowestCount === 0) {
      return undefined;
    } 
    var result = this.storage[this.lowestCount];
    delete this.storage[this.lowestCount];
    this.lowestCount++;
    return result;
  },
  size: function() {
    return this.count - this.lowestCount;
  }
};

// // Helper function to "extend" someInstance object with the methods that exist on queueMethods 
// var extend = function(obj, methods) {
//   // iterate over the keys in someMethods with a for in loop
//   for (let key in obj) {
//     // set obj[key](someInstance[key]) to point to methods[key] (i.e.someMethods[key]) 
//     obj[key] = methods[key];
//   }
// }; 

// var obj = Queue();


