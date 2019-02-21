var Stack = function() {
  // initiate someInstance object  //#endregion
  // assign a storage property that is an object  
  
  // create and set a count to 0 
  // // create storage object 
  var someInstance = Object.assign({}, stackMethods);
  // var someInstance = _.extend({}, stackMethods);
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




// Create pop method on Stack prototype
//   Check to see if stack is empty
//     if so, return undefined
//   Decrement count
//   Save element at top of stack to a var (to later return)
//   Delete that element from storage
//   Return saved element
// Create size method on Stack prototype
//   Return count
};



