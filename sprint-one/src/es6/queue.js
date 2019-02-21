class Queue {
  constructor() {
    // initialize items in queue 
    this.storage = {};
    this.count = 0; 
    this.lowestCount = 0;
  }

  enqueue(value) {
    // add value to storage at key this.count 
    if (value) {
      this.storage[this.count] = value;
      this.count++;
      return this;
    } 
  }
  
  dequeue() {
    //pull out the first item from the queue
    if (this.count > 0) {
      var result = this.storage[this.lowestCount]; 
      delete this.storage[this.lowestCount];
      this.lowestCount++;
      return result;
    }
  }
  size() {
    //get the length of queue
    if (!this.size) {
      this.size = 0;
    } else {
      this.size = this.count - this.lowestCount;
      if (this.size < 0) {
        this.size = 0;
      }
    }
    return this.size;
  }
}

