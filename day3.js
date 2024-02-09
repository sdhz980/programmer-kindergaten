/// Exercise on Day 3


// No 1
//Write a code to display the multiplication table of a given integer;
//example given integer is 9

const input = 9;
const table = 10;

for (let i = 1; i <= table; i++) {
    console.log (`${input} X ${i} = ${input * i}`);
}


// No 2
//Write a code to check whether string is palindrome or not
//Example : 'madam' -> palindrome

const inputString = "apa";
let index = 0;
let truePalindrome = true;
for (let i = 0 ; i < inputString.length ; i++) {
    index++;
    let fromBeginner = i;
    let fromLast = inputString.length - index;
    console.log(fromBeginner);
    console.log(fromLast);
    if (inputString.charAt(fromBeginner) != inputString.charAt(fromLast)){
        truePalindrome = false; 
        break;
    }
}
console.log(truePalindrome ?  "A Palindrome String" : "Not A Palindrome String");


// No 3
//Write a code to convert centimeter to kilometer.
//Example : 100000 -> 1km


let centimeterNumber = 100000;
console.log(`${centimeterNumber/100000} Km`);

// No 4
//Write a code to format number as currency (IDR)
//Example : 1000 -> Rp.1.000,00


const moneyFormat = new Intl.NumberFormat('id-ID',{
    style: 'currency',
    currency: 'IDR'
});
let numberMoney = 1000;
console.log(moneyFormat.format(numberMoney));


// No 5
//Write a code to remove the first occurrence of a given "search string" from a string
//Example : string = "Hello world",search string = "ell" -> "Ho world"


let helloWorld = "hello world";
let searchString = "ell"
console.log(helloWorld.replace(searchString,""));


// No 6
//Write a code to capitalize the first letter of each word in a string
//Example : "hello world" -> "Hello World"


// Hello World Ikut Variable di atas
console.log(helloWorld.split(" "));