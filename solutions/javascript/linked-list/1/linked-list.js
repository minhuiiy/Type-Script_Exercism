//
// This is only a SKELETON file for the 'Linked List' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
class ListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}
export class LinkedList {
  constructor() {
    this.head = null;
  }
  
  push(value) {
    const newNode = new ListNode(value);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while(current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  pop() {
    if (!this.head) return null;
    
    let current = this.head;
    let prev = null;
    while(current.next) {
      prev = current;
      current = current.next;
    }
    
    if(prev) {
      prev.next = null;
    }else {
      this.head = null;
    }
    
    return current.value;
  }

  shift() {
    if (!this.head) return null;
    const value = this.head.value;
    this.head = this.head.next;
    return value;
  }

  unshift(value) { 
    const newNode = new ListNode(value, this.head);
    this.head = newNode;
    }

  delete(value) {
    if (!this.head) return;

    if(this.head.value === value) {
      this.head = this.head.next;
      return;
    }

    let current = this.head;
    while(current.next) {
      if(current.next.value === value) {
        current.next = current.next.next;
        return;
      }
      current = current.next;
    }
  }

  count() {
    let cnt = 0;
    let current = this.head;
    while(current) {
      cnt++;
      current = current.next;
    }
    return cnt;
  }
}
