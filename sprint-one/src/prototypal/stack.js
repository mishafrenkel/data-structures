var Stack = function() {
  var someInstance = Object.create(stackMethods);
  someInstance.storage = {};
  someInstance.index = 0;
  return someInstance;
};

var stackMethods = {
  push: function(value) {
    this.storage[this.index] = value;
    this.index++; 
    return this; 
  }, 
  pop: function() {
    if (this.index === 0) {
      return undefined;
    }
    this.index--;
    var result = this.storage[this.index];
    delete this.storage[this.index]; 
    return result; 
  },    
  size: function() {
    return this.index;
  }
};

// // Adds a value onto the end of the stack
// Stack.prototype.push = function(value) {
//   this.storage[this.count] = value;
//   this.count++;
// };

// // Removes and returns the value at the end of the stack
// Stack.prototype.pop = function() {
//   // Check to see if the stack is empty
//   if (this.count === 0) {
//     return undefined;
//   }

//   this.index--;
//   var result = this.storage[this.index];
//   delete this.storage[this.index];
//   return result;
// };

// // Returns the length of the stack
// Stack.prototype.size = function() {
//   return this.count;
// };


