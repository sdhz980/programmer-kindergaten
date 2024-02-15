// 1. Based on the array below write a function that will return primitive data types only. let
// arr = [1, [], undefined, {}, "string", {}, []];
// a. The function will return [1, undefined, “string”]

let arrPrimitive = [1, [], undefined, {}, "string", {}, []];
function returnArrayType (Arr) {
    const tmp = [];
    for (let i = 0; i < Arr.length;i++) {
        tmp.push(typeof Arr[i]);
    }
    return tmp;
}
console.log(returnArrayType(arrPrimitive));

// 2. Write a function from a given array of numbers and return the second smallest number
// a. Example : numbers = [5, 3, 1, 7, 2, 6] → 2

let arrayNumber = [5, 3, 1, 7, 2, 6];
function returnSecondSmallest(data) {
    data.sort((a,b) => a-b);
    return data[1];
}
console.log(returnSecondSmallest(arrayNumber));

// 3. Write a function from a given array of mixed data types and return the sum of all the number
// a. Example : mixedArray = ["3", 1, "string", null, false, undefined, 2] → 3

let mixedArray = ["3", 1, "string", null, false, undefined, 2];
function sumNumberArr(Arr) {
    let numberArr = mixedArray.filter((mixed) => typeof mixed == 'number');
    return numberArr.reduce((a,b) => a+b);
}
console.log(sumNumberArr(mixedArray));

// 4. Write a function from the below array of number that will return sum of duplicate values. let
// arr = [10, 20, 40, 10, 50, 30, 10, 60, 10];
// a. The function will return 40

let arrayNumberLagi = [10, 20, 40, 10, 50, 30, 10, 60, 10];
function sumNumberArrLagi (mixed) {
    const tmpArr = [];
    console.log(!mixed.includes(10) )
    const process = mixed.filter((item,index) => {
        if (index === 0)  tmpArr.push(item);
        if (mixed.indexOf(item) !== index) {
            tmpArr.push(item);
        }
    }); 
    return tmpArr.reduce((a,b) => a +b );
}
console.log(sumNumberArrLagi(arrayNumberLagi));

function sumDuplicate (Arr) {
    const duplicateValues = Arr.filter((value,index,array) => {
        // jadi patokan untuk mengecek di looping kedua
        return array.indexOf(value) !== index;
    });
    console.log(duplicateValues);
    
    let result = 0;
    for (let item of Arr) {
        if (duplicateValues.includes(item)) {
            result += item;
        }
    }
    return result;
}   
console.log(sumDuplicate(arrayNumberLagi));

// 5. Write a game of rock, paper, scissor function that will return 'Win' or 'Lose'. The function will randomly pick
// between rock, paper, or scissor.
// a. Example: if you throw a rock as an argument and the function pick a scissor then it will return 'Win'

function rockPaperScissor (yourTurn) {
    const Choices = ['batu','gunting','kertas']
    const compChoices = Choices[Math.floor(Math.random() * 2.9)];
    
    if (!Choices.includes(yourTurn)) {
        return "wrong input"
    }
    if (yourTurn === compChoices) return 'draw'
    if (yourTurn === 'batu' && compChoices === 'gunting' ||
        yourTurn === 'gunting' && compChoices === 'kertas' ||
        yourTurn === 'kertas' && compChoices === 'batu'
        ) return 'win'

        return 'lose';
    }
console.log(rockPaperScissor('batu'));