// Exercise

// ● Create a function to check if two objects are equal
// ● Example
//     ○ Input : { a: 2 } & { a: 1 }
//     ○ Output: false
// ● Example
//     ○ Input : { a: “Hello” } & { a: 1 }
//     ○ Output: false
// ● Example
//     ○ Input : { a: 1 } & { a: 1 }
//     ○ Output: true

// const obj1 = { a : 2 , b: 1};
// const obj2 = { a : 2 , b: 1};

// function checkEqual (ob1,ob2) {
//     let isEqual = false;

//     if (Object.keys(ob1) && Object.keys(ob2)) {
//         for (const [key,value] of Object.entries(ob1)) {
//             if (ob1[key] == ob2[key]) {
//                 isEqual = true
//             }   else return isEqual = false;
//         }
//     }
//     return isEqual    
// }

// console.log(checkEqual(obj1,obj2))


// Exercise

// ● Create a function to get the intersection of two objects
// ● Example
//     ○ Input : { a: 1, b: 2 } & { a: 1, c: 3 }
//     ○ Output: { a: 1 }

// const objEct1 = {a: 1, b: 2};
// const objEct2 = {a: 1, b: 3, c:1};

// const intersection = (obj1,obj2) => {
//     // console.log(obj1);
//     // console.log(obj2);

//     const duplicate = {};

//     for (let key in obj1) {
//         if (obj1[key] == obj2[key]) {
//             duplicate[key] = obj1[key];
//         }
//     }
//     return duplicate;
// };

// console.log(intersection(objEct1,objEct2))

// Exercise

// ● Create a function to merge two array of student data and remove duplicate data
// ● Student data : name & email
// ● Example :
//         Array1 → [
//         { name: ‘Student 1’, email : ‘student1@mail.com’ },
//         { name: ‘Student 2’, email : ‘student2@mail.com’ }
//         ]
//         Array2 → [
//         { name: ‘Student 1’, email : ‘student1@mail.com’ },
//         { name: ‘Student 3’, email : ‘student3@mail.com’ }
//         ]
// ● Result :

//     ArrayResult → [
//         { name: ‘Student 1’, email : ‘student1@mail.com’ },
//         { name: ‘Student 2’, email : ‘student2@mail.com’ },
//         { name: ‘Student 3’, email : ‘student3@mail.com’ }
//         ]

// const studentArr1 = [
//             { name: 'Student 1', email : 'student1@mail.com' },
//             { name: 'Student 2', email : 'student2@mail.com' }
//             ]
// const studentArr2 = [
//             { name: 'Student 1', email : 'student1@mail.com' },
//             { name: 'Student 3', email : 'student3@mail.com' }
//             ]

// const removeDuplicate = (arr1,arr2) => {
//     const combinedArr = [...arr1,...arr2];
//     const temp = [];

//     for(let i = 0; i< combinedArr.length;i++) {
//         const duplicateValue = temp.filter((val) => {
//             return (val.email === combinedArr[i].email);
//         })
//         if (!duplicateValue.length) {
//             temp.push(combinedArr[i]);
//         }
//     }
//     return temp;
// }

// console.log(removeDuplicate(studentArr1,studentArr2));

// Exercise

// ● Create a function that can accept input as an array of objects and switch all values into property and
// property into value
// ● Example :
//     ○ Input : [{ name: ‘David’, age: 20 }]
//     ○ Output : [{ David: ‘name’, 20: ‘age’}]

// const exObj = [{ name : 'David', age: 20}]
// const resRevObj = [{}]

// function reverseObject(obj) {

//     for (let i = 0; i< obj.length;i++) {
//         let tmpKeys = Object.keys(obj[i]);
//         let tmpArray = [];
        
//         for (let a = 0; a< tmpKeys.length; a ++) {
//             tmpArray.push(tmpKeys[a],obj[i][tmpKeys[a]])
//             console.log(tmpArray);
//             resRevObj[i][tmpArray[1]] = tmpArray[0];
//             tmpArray = [];
//         }
        
//     }
// }

// reverseObject(exObj);
// console.log(resRevObj);

// const arrData = [{ name : 'David', age: 20}]
// const switchValueToKey = (arr) => {
//     const result = [];
//     arr.forEach((item) => {
//         let temp = {};
//         for (let key in item) {
//             temp[item[key]] = key;
//         }
//         result.push(temp);
//     })
//     return result;
// }
// console.log(switchValueToKey(arrData));

// Exercise

// ● Create a function to find a factorial number using recursion
// ● Example
//     ○ Input : 5
//     ○ Output: 5! = 5 x 4 x 3 x 2 x 1 = 120

// class findFactorial {
//     constructor(number) {
//         this.number = number;
//     }
//     recursionNumber(number) {
//         for (let i = 5-1;i > 0; i++) {
//             number *= i;
//         }
//         console.log(number);
//     return number;
//     }
// }

// const recursFunc = new findFactorial();

// function recursFuncname(theNum) {
//     var result = theNum;
//     let currentNum = theNum;
    
//     doMultiply();
    
//     function doMultiply() {
//         currentNum --;
//         result *= currentNum;
//         if (currentNum !== 1) {
//             doMultiply()
//         }
//     }

//     return result;
// }

// console.log(recursFuncname(5));

// const curesedFunc = (num) => {
//     let pos = num;
//     let result = num;
//     while (pos > 1) {
//         pos --;
//         result *= pos;
//     }
//     return result;
// }

// console.log(curesedFunc(6));