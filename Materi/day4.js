//Array















// FOR OF LOOP -> shortcut dari for loop biasa, biasa di gunakan kalau kita tidak perlu
// mengakses indexnya. bakalan melakukan looping sebanyak isi dari arraynya

// const fruits = ['apel','pisang','ceri'];

// for(const fruit of fruits) {
//     console.log(fruit);
// }

// const persons = ['budi','siti'];

// for (const person of persons) {
//     console.log(person);
// }

//Function ===================================================================

// function declaration

// function square() {
//     return 1+1;
// }

// const result = square();
// console.log(square());
// console.log(result);

// function expression

// const square = function () {
//     return 1+1;
// };

// const result = square();
// console.log(square());
// console.log(result);

// Function Scope ===========================================================

// function greeting() {
//     const hello = 'hello';

//     return hello;
// }

// console.log(hello);     variable hello tidak bisa di akses 
//                         karena berada di dalam function
// console.log(greeting());   // output 'hello'

// Parameter & Argument ======================================================
// argument -> value yang di masukkan saat melakukan panggilan function
// parameter -> variable yang memiliki value dari argument di parentheese fucntion

// function greeting(name){ //parameter function adalah name
//     const hello = 'hello';

//     return hello +" "+ name;
// }

// const result = greeting('budi'); // argument -> 'budi'
// const result2 = greeting('siti'); // argument -> 'siti'

// console.log(result);
// console.log(result2);

// Default Parameter

// function multiply(a,b = 1) { //Parameter default b adalah 1
//                             //Parameter default hanya bisa di berikan
//                            //ke parameter yang belakang dari parameter depan 
//     console.log(a);
//     console.log(b);
//     return a * b;
// }

// console.log(multiply(5));
// console.log(multiply(5 * 2));

// Rest Parameter ============================================================

// function myFunc(a,b, ...more) {
//     console.log(a);
//     console.log(b);
//     console.log(more);
// }

// myFunc(1,2,3,4,5,6,7,8,9,10);

// // Nested Function ===========================================================
// //outer function
// function getMessage(firstName) {
//     //inner function
//     function sayHello () {  
//         return "hello " + firstName + ".";
//     }
//     //inner function
//     function welcomeMessage() {
//         return "welcome to purwadhika"
//     }

//     return sayHello() + " " + welcomeMessage();
// }

// console.log(getMessage("budi"));

// Closure =====================================================================


// function greeting(name) {
//     const defaultMessage = "hello ";

//     return function () {
//         return defaultMessage + name;
//     };
// };

// const greetingUser = greeting("siti");
// console.log(greetingUser());


// Recursive ==================================================================
// Fungsi yang memanggil dirinya sendiri layaknya looping


// function countDown(number){
//     console.log(number);
//     let nextNumber = number - 1;

//     if (nextNumber > 0) {
//         countDown(nextNumber);
//     }
// }

// countDown(10);


// Arrow Function =============================================================
// shortcut untuk menuliskan function expression


// contoh function expression
// const square = function(number) {
//     return number * number;
// };

// contoh jika di ubah ke arrow function
// const square1 = (number) => {
//     return number * number;
// }


// alternatif arrow function jika return hanya satu value;
//const square2 = (number) => number * number;


// Array Build in Method ==================================================

// Join -> menggabungkan value yang ada di dalam array ke dalam bentuk string
// let words = ["hello","world"];
// console.log(words.join(" "));

// Pop -> menghilangkan isi value paling akhir dalam array
// let words = ["hello","world","hello"];
// words.pop();
// console.log(words);

// Push -> menambahkan value ke dalam array di paling akhir
// let words = ["hello","world"];
// words.push("Jogja");
// console.log(words);

