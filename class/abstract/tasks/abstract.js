"use strict";
class ArrayQueue {
    constructor() {
        this.queue = [];
    }
    isEmpty() {
        return this.queue.length === 0;
    }
    size() {
        return this.queue.length;
    }
    enqueue(item) {
        this.queue.push(item);
    }
    dequeue() {
        return this.queue.shift();
    }
    front() {
        return this.queue[0];
    }
}
const arrTest1 = new ArrayQueue();
arrTest1.enqueue(5);
arrTest1.enqueue(10);
console.log(arrTest1.front());
console.log(arrTest1.dequeue());
console.log(arrTest1.size());
const arrTest2 = new ArrayQueue();
arrTest2.enqueue("5");
arrTest2.enqueue("10");
console.log(arrTest2.front());
console.log(arrTest2.dequeue());
console.log(arrTest2.size());
//! STACK
class Stack {
    constructor(limit = Number.MAX_VALUE) {
        this.stack = [];
        this.limit = limit;
    }
    length() {
        return this.stack.length;
    }
    isEmpty() {
        return this.length() === 0;
    }
    push(entity) {
        if (this.length() < this.limit)
            this.stack.push(entity);
        else
            throw new Error('The limit has been reached!');
    }
    pop() {
        if (this.isEmpty())
            throw new Error('Satck is Empty');
        return this.stack.pop();
    }
    top() {
        return this.stack[this.length() - 1];
    }
}
const stackTest1 = new Stack(10);
stackTest1.push(20);
stackTest1.push(50);
console.log(stackTest1.top());
console.log(stackTest1.pop());
console.log(stackTest1.length());
const stackTest2 = new Stack(10);
stackTest2.push("20");
stackTest2.push("50");
console.log(stackTest2.top());
console.log(stackTest2.pop());
console.log(stackTest2.length());
