/*
    Write a code to convert celcius to fahrenheit
    - Example: 60 Celcius -> 140 Fahrenheit
*/

let celciusNumber = 66;
let fahrenheit = (celciusNumber * 1.8) + 32;
console.log(`${celciusNumber} in fahrenheit is ${fahrenheit}`);

/*
Write a code to check whether the number is odd or even
-Example 25 -> odd number, 2 -> even number    
*/

let oddorevenNum;
oddorevenNum = 7;

console.log(oddorevenNum % 2 === 0 ? "genap" : "ganjil");

if (oddorevenNum % 2 == 0 ) console.log(`${oddorevenNum} is a even number`);
else console.log(`${oddorevenNum} is a odd number`);  

/*
Write a code to check whether the number is prime number or not
-Example 7 -> 7 is a prime number
-Example 6 -> is not a prime number 
*/

let isPrimeNumber = true;
let checkIsPrimeNumber = 2;
for (let i = 2;i < celciusNumber; i++) {
    if(isPrimeNumber % i == 0 ) {
        isPrimeNumber = false;
        break;
    }
}   console.log(isPrimeNumber);

/*
Write a code to find the sum of the number 1 to N
Example 5 -> 1 + 2 + 3 + 4 + 5 = 15
Example 3 -> 1 + 2 + 3 = 7
*/

// let theSumNumber = 5;
// let resultSumNumber;
// let message = "";
// for (let i = 1 ; i <= theSumNumber ; i++) {
//     resultSumNumber += i;
//     console.log(i);
//     message += i + (i !== theSumNumber ? "+" : "");
// }   console.log(`${message} = ${theSumNumber}`);


/*
Write a code to find factorial of number
Example 4! -> 4 x 3 x 2 x 1 = 24
Example 6! -> 6 x 4 x 3 x 2 x 1 = 720 
*/

const num = 5;
let result = 1;
let message = "";
for(let i = 5; i >= 1; i-- ) {
    result *= i;
    message += i + (i === 1 ? " " : "*");
}   
console.log(`${message} = ${result}`);
console.log(result);

/*
Write a code to print the first N fibonacci numbers
Example 15 -> 610  
*/

const n = 15;
let a = 0;
let b = 1;
for (let i = 0 ; i <n ; i++) {
    let next = a+b;
    a = b;
    b = next;
    console.log(a);
}