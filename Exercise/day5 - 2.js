// 1. Write a function to remove all odd numbers in an array and return a new array that contains even numbers only
// a. Example : numbers = [1, 2, 3, 4, 5, 6] → [2, 4, 6]

let unremovedOddNumber = [1, 2, 3, 4, 5, 6];
const removedOddNumber = unremovedOddNumber.filter((indexNum) => {
    if (indexNum % 2 == 0)return indexNum;
});
console.log(removedOddNumber);

// 2. Write a function to insert multiple given integer (not an array) to an array and have a maximum size input. The
// array can only have a maximum size from a given input. (if the maximum size of the given input is 5 than the
// array can only contain 5 elements).
// a. Example :
// maxSize = 5, given integers is 5, 10, 24, 3, 6, 7, 8
// The function will return [5, 10, 24, 3, 6]

let exampleArr = [5,10,24,3,6,7,8];
let maxSize = 5;
const arrWithMaxSize = exampleArr.slice(0,maxSize);
function setMaxSizeArr(max,data) {
    return data.slice(0,max);
}
console.log(setMaxSizeArr(5,exampleArr))
console.log(arrWithMaxSize);

// 3. Write a function that will combine 2 given array into one array
// a. Example : arr1 = [1, 2, 3], arr2 = [4, 5, 6] → [1, 2, 3, 4, 5, 6]

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
function doConcat(array1,array2) {
    return array1.concat(array2);
}
let newarr = arr1.concat(arr2);
console.log(doConcat(arr1,arr2));
console.log(newarr);

// 4. Write a function to find duplicate values in an array
// a. Example : arr = [1, 2, 2, 2, 3, 3, 4, 5, 5] → [2, 3, 5]

let arrayisArray = [1, 2, 2, 2, 3, 3, 4, 5, 5];
const toFindDuplicate = arrayisArray => arrayisArray.filter((item,index) => arrayisArray.indexOf(item) !== index);
const duplicatedElement = toFindDuplicate(arrayisArray);
console.log(duplicatedElement);

// 5. Write a function to find the difference in 2 given array
// a. Example : arr1 = [1, 2, 3, 4, 5], arr2 = [3, 4, 5, 6, 7] → [1, 2, 6, 7]

let arrayArray1 = [1, 2, 3, 4, 5];
let arrayArray2 = [3, 4, 5, 6, 7];
let differenceNumber = arrayArray1.filter((anum) => {
    return arrayArray2.find((numA) => numA == anum);
});
console.log(differenceNumber);
