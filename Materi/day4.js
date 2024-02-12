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

// Shift -> menghilangkan value yang paling depan dalam array
// let words = ["hello","world"];
// words.shift();
// console.log(words);

// UnShift -> menambahkan value ke urutan paling depan array
// let words = ["hello","world"];
// words.unshift("Purwadhika");
// console.log(words);

// Length -> menampilkan berapa banyak isi value dari sebuah array
// let words = ['hello', 'world'];
// console.log(words.length);

// Concat -> menggabungkan 2 array menjadi 1 array
// let arr1 = ["Hello"];
// let arr2 = ["World"];
// console.log(arr1.concat(arr2));
// console.log(arr2.concat(arr1));

// Splice -> untuk menghapus,mengganti atau menambahkan value pada sebuah array
// Rumus -> splice(startIndex,brpYangMauDiDelete,item,item, ...dst)

// Menambahkan Item
// const months = ["Jan","March","April","June"];
// months.splice(1,0,"Feb");
// console.log(months);
// // Menghapus Item
// months.splice(4,1);
// console.log(months);
// // Mengedit Item
// months.splice(3,1,"May");
// console.log(months);

// Slice -> mereturn new array dengan value yang sudah kita tentukan
// index start dan index end nya dari sebuah array
// Rumus -> slice(startIndex,endIndex)

// const fruits = ["Banana","Orange","Lemon","Apple","Manggo",];
// console.log(fruits.slice(1,3));

// IndexOf -> mencari index dari value yang kita cari
// Jika value tidak ada dalam array maka akan mereturn -1

// const fruits = ["Banana","Orange","Lemon","Apple","Manggo",];
// const index = fruits.indexOf("Apple");
// console.log(index);

// Sort -> mengurutkan isi array berupa string / number

// const fruits = ["Banana","Orange","Lemon","Apple","Manggo",];
// fruits.sort();
// console.log(fruits);

// const points = [8,9,4,5,6,2,16,5,4];
// points.sort();
// console.log(points);
// console.log(points.sort((a,b) => a-b)); //Ascending
// console.log(points.sort((a,b) => b-a)); //Descending


// Reverse -> membalikkan urutan elemen di dalam array

// const fruits = ["Banana","Orange","Lemon","Apple","Manggo",];
// fruits.reverse();
// console.log(fruits);

// ForEach -> hanya di gunakan untuk looping pada array, dan tidak mereturn apapun

// const fruits = ["Banana","Orange","Lemon","Apple","Manggo",];

// const result = fruits.forEach((fruit) => {
//     console.log(fruit);
//     return fruit;
// });

// console.log(result); //Hasilnya undefined

// Map -> sama seperti forEach melakukan looping tapi menghasilkan return array baru

// const resultWithMap = fruits.map((fruit) => {
// console.log(fruit);
//     return fruit;
// });

// console.log(resultWithMap); //Menghasilkan return

// Filter -> melakukan looping juga dan akan menghasilkan array baru berdasarkan
//          kondisi yang di masukkan

// const ages = [32,33,16,40];
// // const result = ages.filter((age) => age >= 18);
// const result = ages.filter((age) => {
//     return age >= 18});

// console.log(result);

// Find -> mencari value yang ditemukan pertama kali dalam array

// const ages = [32,33,16,40];
// const result = ages.find((age) => age > 33);
// console.log(result);

// Reduce -> biasa di gunakan untuk operasi aritmatika pada tiap isi array
//           dan mereturn hasil dari operasi tersebut

// const numbers = [120,100,300];
// const result = numbers.reduce((a,b) => a +b);
// const result1 = numbers.reduce((a,b) => {
//     return a + b ;
// });
// console.log(result);
// console.log(result1);

// Includes -> mengecek value pada array ada apa tidak,jika ada bakal 
//            mereturn true,jika tidak akan mereturn false

// const fruits = ["Banana","Orange","Lemon","Apple","Manggo",];
// console.log(fruits.includes("Orangesss"));