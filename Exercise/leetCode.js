// 2620. Counter
// /**
//  * @param {number} n
//  * @return {Function} counter
//  */
// var createCounter = function(n) {    
//     return function() {
//         return n++;        
//     };
// };


// const counter = createCounter(10)
// counter() // 10
// counter() // 11
// counter() // 12
 
// 2621 . Sleep

// async function sleep(millis) {
//     let promise = new Promise((resolve,reject) => {
//         setTimeout(() => resolve(''),millis)
//     });
//     return await promise;
// }
// let t = Date.now()
// sleep(100).then(() => console.log(Date.now() - t))


// 2619. Array Prototype Last
// /**
//  * @return {null|boolean|number|string|Array|Object}
//  */
// Array.prototype.last = function() {
//     let lastIndex = this.length-1;
//     if (this[lastIndex] == undefined && this[lastIndex] !== null) return -1;
//     return this[lastIndex];
// };

// const arr = [1, 2, null];
// arr.last(); // 3
// console.log(arr.last());

// 2629. Function Composition

// var compose = function(functions) {
//     return function(x) {
//         return functions.reduceRight((acc,fn) => {
//             return fn(acc)
//         },x)
//     }
// };

// const fn = compose([x => x + 1, x => 2 * x])
// console.log(fn(4));

// let compose = function(functions) {
//     return function(x) {
//         return functions.reduceRight((acc,fn) => {
//             return fn(acc);
//         },x)
//     }
// }
// let arrayFunc = compose([x=> x*2]);
// console.log(arrayFunc(5));

// 2625. Flatten Deeply Nested Array

// var flat = function (arr, n) {
//     const tmpArr = [];
//     let depthCount = 0;
//     doPushArr(arr);

//     function doPushArr(currentArr) {
//         for (let i = 0; i < currentArr.length ;i++) {
//             console.log(typeof currentArr[i]);
//             if (typeof currentArr[i] == 'object' || typeof currentArr[i] == 'array') {
//                 doSortArr(currentArr[i]);
//             } 
//             else tmpArr.push(currentArr[i]);
//         }
//     }

//     function doSortArr (currentArr) {
//         depthCount ++;
//         if (depthCount <= n) {
//             doPushArr(currentArr)
//             depthCount --;
//         }
//         else {
//             tmpArr.push(currentArr)
//             depthCount --;
//         };
//     }
//     return tmpArr;

// };

// The Fastest Solution

// var flat = function (arr,n) {
//     let depthCount = 0;
//     const result = [];
//     const sortSubArray = function (inArr) {
//         inArr.map((value) => {
//             if (typeof value == 'object' && depthCount < n) {
//                 depthCount ++;
//                 sortSubArray(value);
//                 depthCount --;
//             }
//             else {
//                 result.push(value);
//             }
//         });
//     }
//     sortSubArray(arr)
//     return result;
// }

// const exArray = [1, 2, 3, 
//                 [4, 5, 6], 
//                 [7, 8, [9, 10, 11], 12], 
//                 [13, 14, 15]];

// console.log(flat(exArray,1));

// 2618. Check if Object Instance of Class

// var checkIfInstanceOf = function(obj, classFunction) {
//     let result = false;
//     const array = []
    
//     try {
//         const isEnd = true;
//         const proto = ['__proto__']
//         let pos = obj[proto];
//         pos = pos[proto];
//         if (classFunction.constructor.name !== 'Function') return result;
        
//         if (obj.constructor.name == classFunction.name || classFunction.name == 'Object') return result = true;
        
//         while (isEnd) {
//             if (pos.constructor.name == 'Object' || pos.constructor.name == classFunction.name) {
//                 if (array[array.length-1] == classFunction.name || pos.constructor.name == classFunction.name) return result = true;
//                 isEnd = false;
//             }
//             else {
//                 array.push(pos.constructor.name)
//                 pos = pos[proto];
//             }
//         }
//         return result;
//       }
//       catch(err) {
//         return result;
//       }

// };

// const testObj = func = () => { 
// class X {};
// class C21 {}
// class C0 extends Object {};
// class C1 extends C0 {};
// class C2 extends C1 {};
// class C3 extends C2 {};
// class C4 extends C3 {};
// class C5 extends C4 {};
// class C6 extends C5 {};
// class C7 extends C6 {};
// class C8 extends C7 {};
// class C9 extends C8 {};
// return checkIfInstanceOf(new C9(), C0); }

// const testObj = func = () => checkIfInstanceOf(Error(), Error);

// const testObj = func = () =>{ 
// class X {};
// class C0 extends Object {};
// class C1 extends C0 {};
// class C2 extends C1 {};
// class C3 extends C2 {};
// class C4 extends C3 {};
// class C5 extends C4 {};
// class C6 extends C5 {};
// class C7 extends C6 {};
// class C8 extends C7 {};
// class C9 extends C8 {};
// return checkIfInstanceOf(new C9(), C5);}

// console.log((testObj()));

// 2722. Join Two Arrays by ID

// var join = function(arr1, arr2) {
//     const result = {};
//     for (let i = 0; i < arr1.length; i++) {
//         result[arr1[i].id] = arr1[i];
//     } 
//     for (let i = 0; i < arr2.length; i++) {
//         if (result[arr2[i].id]) {
//             for (const key in arr2[i]) result[arr2[i].id][key] = arr2[i][key];  
//         } else {
//             result[arr2[i].id] = arr2[i];
//         }
//     } 

//     return Object.values(result);
// };

// arr1 = [{"id":1,"x":36,"d":26,"f":35},{"id":3,"c":20,"z":75}]
// arr2 = [{"id":2,"o":48,"z":84,"y":61}]

// console.log(join(arr1,arr2))



// 69. Sqrt(x)

// var mySqrt = function(x) {
//     return Math.floor(Math.sqrt(x));
// };


// 412. Fizz Buzz

// function fizzBuzz(n) {
//     const result = []
//     for (let i = 1; i <= n;i++) {
//         if (i % 3 == 0 && i % 5 == 0) result.push("FizzBuzz");
//         else if (i % 3 == 0 ) result.push("Fizz");
//         else if (i % 5 == 0 ) result.push("Buzz");
//         else result.push(i);
//     }
//     return result.join(',');
// }

// console.log(fizzBuzz(15));

// let haystack = "hello"
// let needle ="ll"
// var strStr = function(haystack, needle) {
//     for (let i = 0; i < haystack.length ; i++) {
//         let check = haystack.slice(i,i + needle.length)
//         if (check == needle) return i; 
//     }
//     return -1;
// };

// console.log(strStr(haystack,needle));

// var isPalindrome = function(s) {
//     s = s.replace(/[^a-zA-Z0-9]/g, '');
//     s= s.toLowerCase();
//     return s == s.split("").reverse("").join("")
// };

// let string = "0P";

// console.log(isPalindrome(string));

// var convertTemperature = function(celsius) {
//     return [celsius+273.15 , celsius*1.80+32.00]
// };

// console.log(convertTemperature(36.50))


// var sortColors = function(nums) {
//     let lowest;
//     let biggest;
//     const result = []
//     for (let i =0;i<nums.length;i++) {
//         if (nums[i] < nums[i+1]) {
//             result.push(nums[i]);
//         } else {
//             for (let j = i+2;j < nums.length;j++) {
//                 if (nums[i] < nums[i+1]) {
//                     result.push(nums[i]);
//                 }
//             }
//         }
//     }
//     return result;
// };

// const nums = [2,0,2,1,1,0]

// console.log(sortColors(nums))

// var plusOne = function(digits) {
//     const tmpInt = digits.map((value) => {return value})
//     console.log(tmpInt)
//     return Array.from(String(tmpInt) , Number);
// };

// const digits = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3];

// console.log(plusOne(digits));

num1 = "11"
num2 = "123"

var addStrings = function(num1,num2) {
    const num = []
    return num1 + num2;
}

console.log(num1,num2);