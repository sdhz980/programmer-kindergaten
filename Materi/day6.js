// Object
// Object literal
// const user1 = {};

// Object constructor
// const user2 = new Object();

// Property and Method =========================================
// const user = {
//     name: 'David',
//     greeting() { // -> function yang ada di dalam object di sebut method
//         console.log('Hello');
//     },
// };
// user.greeting(); -> invoke function atau method di dalam object

// Add & Delete Property ========================================
// const user = {
//     nama: 'megachan', // {property/key}: {value}
//     partai: 'banteng',
//     age: 100,
// };
// console.log(user);
// user.age = 25; // menambahkan property atau apabila property sudah ada 
//                 // akan menggantikan value yang ada di property tersebut
// console.log(user);
// delete user.partai; // cara untuk mendelete property di sebuah object
//                 // delete.{object}.{property/key};
// console.log(user);

// Accessing Value ==============================================
// dot & []

// const user = {
//     name: 'puanchan',
//     partai: 'badak',
// };

// console.log(user.name);    // Accessing with Dot
// console.log(user['name']); // Accessing with Bracket Square

// Optional Chaining ============================================
// const user = {};

//const user = {
//  adress: {
//        street : ''
// }
// };

// console.log(user.address); // Menampilkan undefined jika property kosong / tidak tersedia
// console.log(user.address.street); // Menampilkan error jika object di dalam property kosong / tidak tersedia
// console.log(user.address?.street); // Menampilkan undefined tapi menghindari error apabila object di dalam property kosong / tidak tersedia

// Accessing Key ================================================

// const user = {
//     nama : 'bowokun',
//     partai : 'partaiqu',
// };
// Mengakses key saja di dalam sebuah object
// console.log(Object.keys(user));   
// Mengakses values saja di dalam sebuah object
// console.log(Object.values(user)); 

// For In (Looping dalam sebuah Object) =========================

// const user = {
//     nama : 'bowokun',
//     hobby : 'partaiqu',
//     umur : 18,
// };

// for (let key in user) {
//     console.log(key);
//     console.log(user[key]);
// }

// Destructuring Assignment =====================================

// const user = {
// nama : 'bowokun',
// hobby : 'partaiqu',
// umur : 18,
// };

// const { nama } = user;   // Mendeklarasikan atau memodifikasi 
                            // isi variable dari sebuah key object
// // const { nama: names } = user; // Sama saja hanya akan mengganti nama variable

// console.log(user.nama); // Access Manual
// console.log(nama);   // Access dari hasil destructuring
// console.log(names);   // Access dari hasil destructuring + modifikasi nama variable

// Spread Operator ==============================================

// const dataOne = [1,2,3];
// const dataTwo = [3,2,1];
// const mergeArr = [...dataOne,...dataTwo]; // Menggabungkan Array / Object ke dalam sebuah Object atau Array

// console.log(mergeArr);

// const obj1 = { name: 'budi'};  // Jika berisi property/key name yang sama 
// const obj2 = { email: 'budi@gmail.com'}; //maka akan tergantikan dengan yang terakhir
// const mergeObj = {...obj1,...obj2};

// console.log(mergeObj);

// This =========================================================
// Mengakses value sesama property

// const user = {
//     name : 'bowokun',
//     hobby : 'futsal',
//     umur : 18,
//     greeting () {
//         console.log(`hello, ${this.name}`);
//     }
// };

// user.greeting();

// // Object Built-in Method
// // Object.assign

// const target = {a:1,b:2};
// const source = {b:4,c:5};

// const result = Object.assign(target , source);

// console.log(result);

// Class ========================================================

// class User {
//     greeting(name) {
//         console.log("Hello " + name);
//     }  
// };


// const User1 =class {
//     greeting() {
//         console.log("Hello");
//     }
// };

// const user1 = new User();
// const user2 = new User();
// user1.greeting("budi");
// user2.greeting("joko");

// userName --> CamelCase
// UserName --> PascalCase


// Constructor ==================================================

// class User {
//     constructor () {

//     }
//     greeting(name) {
//         console.log("Hello" + name);
//     }
// }


// Setter & Getter ============================================== 
// get -> baca data
// set -> set value di dalam object

// const User = {
//     firstName: "aaaa",
//     lastName: "bbbb",

//     get fullName(){ // getter
//         return `${this.firstName} ${this.lastName}`
//     },

//     set fullName(value) { //setter
//         const splittedValue = value.split(" ");
//         this.firstName = splittedValue[0];
//         this.lastName = splittedValue[1];
//     },

//     fullName2(value) { // method biasa
//         const splittedValue = value.split(" ");
//         this.firstName = splittedValue[0];
//         this.lastName = splittedValue[1];
//     },
// };

// User.fullName = "Ariel Tatum" // Menggunakan setter
// User.fullName2("Ariel Peterpan"); // Menggunakan method biasa

// console.log(User);


// Encapsulation ================================================
// Konsep di OOP untuk memBundle data dalam 1 unit ex object or class


// InHeritance ==================================================
// Pewarisan object / class
// Class Parent -> property1,property2,property3
// Class Child -> bisa mengakses property1,property2,property3

class Product {
    constructor (productName,price) {
        this.productName = productName;
        this.price = price;
    };
    show(){

    }
};

// class Book {
//     constructor () {
//         this.productName;
//         this.price;
//         this.author;
//     }
// }

class Book extends Product {
    constructor (productName,price,author) {
        super(productName,price,author);
        this.author = author;
    };
    show(){
    }
};

const book1 = new Book("Buku 1",10000,"Komeng");
console.log(book1);
book1.show;


// Instance Of -> Mengecek apakah sebuah object memiliki hubungan ke class tertentu / tidak

// class Animal {}
// class Rabbit extends Animal {}
// class Tree {}

// const rabbit = new Rabbit();
// console.log(rabbit instanceof Animal); // True
// console.log(rabbit instanceof Rabbit); // True
// console.log(rabbit instanceof Tree); // False