class Stack {
  constructor() {
    this.storage = {};
    this.index = 0;
  }
  size() {
    return this.index;
  }
  push(value) {
    this.storage[this.index] = value;
    this.index++;
  }
  pop() {
    if (this.index > 0) {
      this.index--;
      var result = this.storage[this.index];
      delete this.storage[this.index]; 
      return result;
    } else {
      return undefined;
    }
  }

}


