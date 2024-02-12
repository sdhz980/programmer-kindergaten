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


let unCapString = "hello world";
let unCapWord = unCapString.split(" ");
for (let i = 0; i < unCapWord.length; i++) {
    unCapWord[i] = unCapWord[i][0].toUpperCase() + unCapWord[i].substring(1);
}
console.log(unCapWord.toString().replace(",", " "));


// No 7
//Write a code to reverse a string.
//Example : "hello" -> "olleh"


let unReversedString = "hello";
let reverseString = "";
for (let i = unReversedString.length-1; i >= 0; i--) {
    reverseString += unReversedString[i];
}
console.log(reverseString);


// No 8
//Write a code to swap the case of each character from string
//Example: "The QuiCk BrOwN Fox" -> "tHE qUIcK bRoWn fOX"


let quickBrownFox = "The QuiCk BrOwN Fox";
let swappedQuickBronwFox = quickBrownFox.split("");
let resultSwappedString = "";
for (let i = 0; i < quickBrownFox.length;i++) {
    if (swappedQuickBronwFox[i] == swappedQuickBronwFox[i].toLowerCase()) {
        resultSwappedString += swappedQuickBronwFox[i].toUpperCase();
    }   else resultSwappedString += swappedQuickBronwFox[i].toLowerCase();
}
console.log(resultSwappedString);


// No 9
//Write a code to find the largest of two given integers
//Example: num1 = 42, num2 = 27 -> 42


let integerNum1 = 42;
let integerNum2 = 27;
console.log(integerNum1 > integerNum2 ? `The largest Number is = ${integerNum1}` : `The largest Number is = ${integerNum2}`);


// No 10
//Write a conditional statement to sort three numbers
//Example : num1 = 42 , num2 = 27 , num3 = 18 -> 18,27,42


let nunum1 = 42;
let nunum2 = 27;
let nunum3 = 18;
console.log(`The largest number is = ${Math.max(nunum1,nunum2,nunum3)}`);


// No 11
//Write a code that shows 1 if the input is a string, 2 if the input is a number, and 3 for other data types


let stringDataType = "hello";
let numberDataType = 2;
let arrayDataType = [1,2,3];
let inputDataType = numberDataType;

// if (typeof(inputDataType) == 'string') console.log(1);
// else if ('number') console.log(2);
// else console.log(3);

switch (typeof inputDataType) {
    case 'string' : console.log(1);
    break;
    case 'number' : console.log(2);
    break;
    default : console.log(3);
    break;
}


// No 12
//Write a code to change every letter a into * from a string of input
//Example : 'An apple a day keeps the doctor away' -> `*n *pple * d*y keeps the doctor *w*y`


let uncensoredString =  'An apple a day keeps the doctor away';
let replacedChar = 'a';
let resultCensoredString = uncensoredString.replaceAll(replacedChar.toLowerCase(), "*").replaceAll(replacedChar.toUpperCase(), "*");
console.log(resultCensoredString);