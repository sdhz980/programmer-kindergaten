// Create a function that can create a triangle pattern according to the height we provide like the
// following :
// 01
// 02 03
// 04 05 06
// 07 08 09 10

// Parameters : height → triangle height

const triangleHeight = 4;

function triangleNum (height) {
    let result = "";
    let countHeight = 1;
    for (let i = 0; i < height; i++) {
        for (let a = 0; a <= i; a++) {
            result += countHeight.toString().padStart(2,0) + " ";
            countHeight ++;
        }
        result += "\n";
    }
    return result;
}

console.log(triangleNum(triangleHeight));


// Create a function that can loop the number of times according to the input we provide, and will
// replace multiples of 3 with "Fizz", multiples of 5 with "Buzz", multiples of 3 and 5 with "FizzBuzz".
// Parameters : n → total looping
// Example: n = 6 →1, 2, Fizz, 4, Buzz, Fizz
// Example: n = 15 → 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 12, 13, 14, FizzBuzz

function fazzFizzFuzzy(input) {
    let result = ""
    for (let i = 1; i <= input;i++) {
        if (i % 5 == 0 && i % 3 == 0) result += "fizzbuzz" + " "
        else if (i % 3 == 0 ) result += "fizz" + " "
        else if (i % 5 == 0 ) result += "buzz" + " "
        else result += i.toString() + " ";
    }
    return result;
}

console.log(fazzFizzFuzzy(15));


// Create a function to calculate Body Mass Index (BMI)
// ● Formula : BMI = weight (kg) / (height (meter))2
// ● Parameters : weight & height
// ● Return values :
// ○ < 18.5 return “less weight”
// ○ 18.5 - 24.9 return “ideal”
// ○ 25.0 - 29.9 return “overweight”
// ○ 30.0 - 39.9 return “very overweight”
// ○ > 39.9 return “obesity”

function bmiCalculator (weight,height) {
    let bmi = (weight / (height ** 2)).toFixed(1);
    let result = "";
    if (bmi < 18.5) result = `your bmi was = ${bmi} and you less weight`
    else if (bmi >= 18.5 && bmi < 24.9) result = `your bmi was = ${bmi} and you ideal`
    else if (bmi >= 25 && bmi < 29.9) result = `your bmi was = ${bmi} and you overweight`
    else if (bmi >= 30 && bmi < 39.9) result = `your bmi was = ${bmi} and you very overweight`
    else result = `your bmi was = ${bmi} and you obesity`
    return result;
}

console.log(bmiCalculator(150,1.8));


// Write a function to remove all odd numbers in an array and return a new array that contains even
// numbers only
// ○ Example : [1,2,3,4,5,6,7,8,9,10] → [2,4,6,8,10]

// with arrow function
const numberCollection = [1,2,3,4,5,6,7,8,9,10];
const numberWithoutOdd = numberCollection.filter((number) => {
    if (number % 2 == 0) {
        return number;
    }
});

console.log(numberWithoutOdd);

function decideEvenNumber (data) {
    return data.filter((data) => {
        if (data % 2 == 0) {
        return data;
        }
    });
}
console.log(decideEvenNumber([1,2,3,4,5,6,7,8,9,10]));
console.log(decideEvenNumber(numberCollection));

