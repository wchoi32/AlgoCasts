// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require("./stack");

class Queue {
  constructor() {
    this.firstStack = new Stack();
    this.secondStack = new Stack();
  }

  add(element) {
    this.firstStack.push(element);
  }

  peek() {
    while (this.firstStack.peek()) {
      this.secondStack.push(this.firstStack.pop());
    }

    const firstElement = this.secondStack.peek();

    while (this.secondStack.peek()) {
      this.firstStack.push(this.secondStack.pop());
    }
    return firstElement;
  }

  remove() {
    while (this.firstStack.peek()) {
      this.secondStack.push(this.firstStack.pop());
    }

    const firstElement = this.secondStack.pop();

    while (this.secondStack.peek()) {
      this.firstStack.push(this.secondStack.pop());
    }
    return firstElement;
  }
}

// class Queue {
//   // first attempt
//   constructor() {
//     this.firstStack = new Stack();
//     this.secondStack = new Stack();
//   }

//   add(element) {
//     this.firstStack.push(element);
//   }

//   peek() {
//     return this.firstStack.data[0];
//   }

//   remove() {
//     while (this.firstStack.data.length) {
//       this.secondStack.push(this.firstStack.pop());
//     }

//     const firstElement = this.secondStack.pop();

//     while (this.secondStack.data.length) {
//       this.firstStack.push(this.secondStack.pop());
//     }
//     return firstElement;
//   }
// }

module.exports = Queue;
