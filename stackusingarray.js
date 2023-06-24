class Stack {
  constructor() {
    this.items = [];
  }

  
  push(element) {
    this.items.push(element);
  }

 
  pop() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.items.pop();
  }

  
  isEmpty() {
    return this.items.length === 0;
  }

 
  peek() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.items[this.items.length - 1];
  }

  
  size() {
    return this.items.length;
  }

  
  clear() {
    this.items = [];
  }
}


const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack.pop()); 
console.log(stack.peek()); 
console.log(stack.isEmpty()); 
console.log(stack.size()); 

stack.clear();
console.log(stack.isEmpty()); 