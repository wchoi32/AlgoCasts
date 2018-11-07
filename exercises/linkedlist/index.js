// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, node = null) {
    this.data = data;
    this.next = node;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    // const newNode = new Node(data, this.head); // this.head to point to previous node
    // this.head = newNode;
    this.head = new Node(data, this.head);
  }

  size() {
    let counter = 0;
    let node = this.head;

    while (node) {
      counter++;
      node = node.next;
    }

    return counter;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    let node = this.head;
    // make sure linkedlist head is not empty
    while (node && node.next) {
      node = node.next;
    }

    return node;
  }

  clear() {
    // no reference then js garbage collect
    this.head = null;
  }

  removeFirst() {
    this.head = this.head && this.head.next;
  }

  removeLast() {
    let previous = this.head;
    let current = previous && previous.next;

    if (!previous || !current) {
      this.clear();
      return;
    }

    while (current.next) {
      previous = current;
      current = current.next;
    }

    previous.next = null;
  }

  insertLast(data) {
    if (this.getLast()) {
      this.getLast().next = new Node(data);
    } else {
      this.insertFirst(data);
    }
  }

  getAt(index) {
    let counter = 0;
    let node = this.head;

    while (index > counter && node) {
      node = node.next;
      counter++;
    }

    return node;
  }

  removeAt(index) {
    if (index === 0) {
      this.head = this.getAt(index + 1);
      return;
    }

    if (this.getAt(index)) {
      this.getAt(index - 1).next = this.getAt(index + 1);
      return;
    }

    // let counter = 1;
    // let previous = this.head;
    // let current = previous && previous.next;

    // if (!previous || !current) {
    //   this.clear();
    //   return;
    // }

    // if (index === 0 && previous) {
    //   this.removeFirst();
    //   return;
    // }

    // while (current.next && counter <= index) {
    //   if (counter === index) {
    //     previous.next = current.next;
    //   }

    //   counter++;
    //   previous = current;
    //   current = current.next;
    // }

    // previous.next = null;
  }

  insertAt(data, index) {
    const current = this.getAt(index);

    if (!current) {
      this.insertLast(data);
      return;
    }

    if (index === 0) {
      this.insertFirst(data);
      return;
    }

    this.getAt(index - 1).next = new Node(data, current);
  }

  forEach(fn) {
    // let counter = 0;
    let node = this.head;

    // while (node && counter !== this.size()) {
    while (node) {
      fn(node);
      node = node.next;
      // counter++;
    }
  }

  // For...of Loop built to look for key of Symbol.iterator
  *[Symbol.iterator]() {
    let node = this.head;
    while (node) {
      yield node;
      node = node.next;
    }
  }
}

module.exports = { Node, LinkedList };
