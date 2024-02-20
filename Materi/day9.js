// Data Structure

// Stack Implementation menggunakan class

// Tanda '#' Untuk mendeklarasikan variable
// private,dan untuk mengkases juga menggunakan '#'

// class Stack {
//     #container;
//     constructor() {
//         this.#container = []
//         this.maxSize = 10;
//     }

//     #isFull() {
//         return this.#container.length >= this.maxSize;
//     }

//     #isEmpty() {
//         return this.#container.length === 0;
//     }

//     push(element) {
//         if (this.#isFull()) return "container is full";
//         this.#container.push(element);
//         return "add data success"
//     }

//     pop() {
//         if (this.#isEmpty()) return "container is empty"
//         this.#container.pop();
//         return "delete data success"
//     }

//     getAllElement() {
//         return this.#container;
//     }

// }

// const thisStack = new Stack();
// console.log(thisStack.getAllElement());
// console.log(thisStack.pop());
// console.log(thisStack.getAllElement());

// Queue => FiFo first in first out

// class Queue {
//     #container;
//     constructor() {
//         this.#container = [];

//     }

//     enQueue (element) {
//         // Memasukkan data
//         return this.#container.push(element);
//     }

//     deQueue () {
//         // Menghilangkan data urutan paling awal
//         return this.#container.shift();
//     }

//     getAllElements() {
//         return this.#container;
//     }

// }

// const queue = new Queue();

// console.log(queue.enQueue(1));
// console.log(queue.enQueue(2));
// console.log(queue.enQueue(3));
// console.log(queue.deQueue());
// console.log(queue.getAllElements());

// Set -> hanya menampilkan unique values

// const fruits = ['banana' , 'apple' , 'mango' , 'apple'];

// const newFruits = new Set(fruits);

// console.log(newFruits);
// newFruits.add(1);
// newFruits.add(2);
// newFruits.add(2);
// newFruits.delete(2);

// for (const value of newFruits) {
//     console.log(value);
// }

// newFruits.clear();

// console.log(newFruits);

// HashMap => 


// Linked List => 