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

