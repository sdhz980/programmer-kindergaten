// 1. Write a function to get the lowest, highest and average value in the array (with and without sort function).
// a. Example : arr = [12, 5, 23, 18, 4, 45, 32] → {lowest : 4, highest: 45, average: 19.8xxx}


let numArr = [12, 5, 23, 18, 4, 45, 32];
function calculateNum (data) {    
    let lowest;
    let highest;
    let average;
    lowest = Math.min(...data);
    highest = Math.max(...data);
    average = data.reduce((a,b) => a+b) / data.length;
    average = average.toFixed(5);
    return `lowest : ${lowest}, highest: ${highest}, average: ${average};`
}
console.log(calculateNum(numArr));


// 2. Write a function that takes an array of words and returns a string by concatenating the words in the array,
// separated by commas and - the last word - by an 'and'.
// a. Example : arr = ["apple", "banana", "cherry", "date"] → “apple,banana,cherry, and date”

let fruitArr = ["apple", "banana", "cherry", "date"];
function concatenatingString(data) {
    let result = ""
    for(let i = 0; i < data.length;i++) {
        if (i == data.length -1) result += " and " + data[i]
        else result +=  data[i] + ","
    }
    return result;
}
console.log(concatenatingString(fruitArr));

// 3. Write a function to split a string and convert it into an array of words
// a. Example : “Hello World” → [“Hello”, “World”]

let helloWorld = "Hello World";
function splitString(data) {
    return data.split(" ")
}
console.log(splitString(helloWorld));

// 4. Write a function to calculate each element in the same position from two arrays of integer. Assume both arrays are
// of the same length.
// a. Example : [1, 2, 3] + [3, 2, 1] → [4, 4, 4]

let integerArr1 = [1, 2, 3];
let integerArr2 = [3, 2, 1];
function calculateArrIndex(int1,int2) {
    let resultArr = [];
    for (let i = 0; i < int1.length;i++) {
        resultArr[i] = int1[i] + int2[i];
    }
    return resultArr;
}
console.log(calculateArrIndex(integerArr1,integerArr2));

// 5. Write a function that adds an element to the end of an array. However, the element should only be added if it is
// not already in the array.
// a. Example : arr = [1, 2, 3, 4], newElement = 4 → [1, 2, 3, 4]
// b. Example : arr = [1, 2, 3, 4], newElement = 7 → [1, 2, 3, 4, 7]

let numberArr1 = [1, 2, 3, 4];
function addEndArray(input,inputArr) {
    if (inputArr.find((num) => num == input)) return inputArr;
    else {
        inputArr.push(input);
        return inputArr;
    } 
}
let newElementArr = addEndArray(5,numberArr1);
console.log(newElementArr);