// 1. Based on the array below write a function that will return primitive data types only. let
// arr = [1, [], undefined, {}, "string", {}, []];
// a. The function will return [1, undefined, “string”]

let arrPrimitive = [1, [], undefined, {}, "string", {}, []];

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
    let result ;
    let removedDuplicateNumber = mixed => mixed.filter((Num) => {
        return Num == Num;
    });
    return removedDuplicateNumber(mixed);
}
console.log(sumNumberArrLagi(arrayNumberLagi));

// 5. Write a game of rock, paper, scissor function that will return 'Win' or 'Lose'. The function will randomly pick
// between rock, paper, or scissor.
// a. Example: if you throw a rock as an argument and the function pick a scissor then it will return 'Win'

function rockPaperScissor (yourTurn) {
    let RNG = Math.floor(Math.random() * 3);
    function decideTheWinner(input) {
        if(input === 'rock' && RNG == 0) return "Tie"
        else if (input === 'rock' && RNG == 1) return "You Lose"
        else if (input === 'rock' && RNG == 2) return "You Win";
        else if (input === 'paper' && RNG == 0) return "You Win";
        else if (input === 'paper' && RNG == 1) return "Tie";
        else if (input === 'paper' && RNG == 2) return "You Lose";
        else if (input === 'scissor' && RNG == 0) return "You Lose";
        else if (input === 'scissor' && RNG == 1) return "You Win";
        else if (input === 'scissor' && RNG == 2) return "Tie";
    }
    return decideTheWinner(yourTurn);
}
console.log(rockPaperScissor('rock'));