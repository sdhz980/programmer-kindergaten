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