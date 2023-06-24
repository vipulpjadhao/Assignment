class Queue {
    constructor() {
      this.items = [];
    }
  

    enqueue(element) {
      this.items.push(element);
    }
  
   
    dequeue() {
      if (this.isEmpty()) {
        return "Queue is empty";
      }
      return this.items.shift();
    }
  
    
    isEmpty() {
      return this.items.length === 0;
    }
  

    peek() {
      if (this.isEmpty()) {
        return "Queue is empty";
      }
      return this.items[0];
    }
  
   
    size() {
      return this.items.length;
    }
  
   
    clear() {
      this.items = [];
    }
  }
  
  // Usage example:
  const queue = new Queue();
  
  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);
  
  console.log(queue.dequeue());
  console.log(queue.peek()); 
  console.log(queue.isEmpty()); 
  console.log(queue.size()); 
  
  queue.clear();
  console.log(queue.isEmpty()); 
  