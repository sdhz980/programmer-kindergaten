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

function greeting(name){ //parameter function adalah name
    const hello = 'hello';
    
    return hello +" "+ name;
}

const result = greeting('budi'); // argument -> 'budi'
const result2 = greeting('siti'); // argument -> 'siti'

console.log(result);
console.log(result2);

