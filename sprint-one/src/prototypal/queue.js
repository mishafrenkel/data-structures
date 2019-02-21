var Queue = function() {
  var someInstance = Object.create(queueMethods);
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

// This Stack is written using the pseudoclassical pattern
