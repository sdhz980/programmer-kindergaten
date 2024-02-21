// NO 1

//  You are given a JavaScript class called Train that simulates a train's passenger management system. 
//     The Train class has the following methods and properties:

//     - constructor(): Initializes the Train with an initial passenger, "masinis," and a maximum 
//     capacity of 10 passengers.

//     - isFull(): Checks if the train is at full capacity. It returns true if the train is full 
//     and false otherwise.

//     - isEmpty(): Checks if the train has no passengers except "masinis." It returns true if the 
//     train is empty and false otherwise.

//     - showPassenger(): Returns an object that contains the list of passengers on the train and 
//     the remaining available seats.

//     - passengerIn(name): Adds a passenger with the given name to the train. It returns "add passenger 
//     success" if the passenger is successfully added, "train full" if the train is at full capacity, 
//     and "passenger already exists" if the passenger is already on the train.

//     - passengerOut(name): Removes a passenger with the given name from the train. It returns 
//     "remove passenger success" if the passenger is successfully removed, "cannot remove masinis" 
//     if an attempt is made to remove the "masinis," "train empty" if the train is already empty, and 
//     "passenger not found" if the passenger with the given name is not found on the train.



// class Train {
    
//     #passenger;
//     #maximumCapacity;
//     #masinis;
//     constructor () {
//         this.#passenger = [];
//         this.#masinis = 'Bob';
//         this.#maximumCapacity = 10;
//     }

//     isFull () {
//         return this.#passenger.length >= 9;
//     }

//     isEmpty () {
//         if (this.#passenger.length === 1 && this.#passenger.includes(this.#masinis)) {
//             return true;
//         }
//         return this.#passenger.length === 0;
//     }

//     showPassenger () {
//         return this.#passenger;
//     }

//     passengerIn(name) {
//         if (name == null || name == undefined || name == '') return 'please input data';
//         if (this.#passenger.includes(name)) {
//             return 'passenger already exists';
//         } else {
//             if (this.isFull()) {
//                 return 'train full';
//             } else {
//                 this.#passenger.push(name);
//                 return 'add passenger success'
//             }
//         }
//     }

//     passengerOut(name) {
//         if (this.isEmpty()) return 'train already empty'

//         if (name == this.#masinis) return 'cannot remove masinist'

//         if (this.#passenger.includes(name)) {
//             this.#passenger.pop(this.#passenger.indexOf(name));
//             return 'remove passenger success'
//         }   

//         else return 'no passenger found';
//     }

// }

// const trainFunc = new Train();

// console.log(trainFunc.passengerIn('Robert'));

// console.log(trainFunc.showPassenger());

// console.log(trainFunc.passengerOut('Robert'));

// console.log(trainFunc.passengerOut('Bob'));

// console.log(trainFunc.showPassenger());

// NO 2

// Write a JavaScript function called phoneNumber that takes a single argument input. 
//     The function is intended to format a phone number. It checks the input to ensure 
//     it meets certain criteria and then proceeds with formatting. The formatting 
//     includes replacing the leading "0" with "62" and creating a template in the 
//     format "(xxxx)-xxxx-xxxxx" where each "x" represents a digit from the input. The 
//     function returns the formatted phone number.

//     - Check if the input is of type "string." If it's not, return "Invalid phone number."
//     - Check if the length of the input is exactly 12 characters. If it's not, return "Invalid phone number."
//     - Make sure the input all are numeric 0-9
//     ex : 
//     input = "085244455555"
//     output = "(6285)-2444-55555"

// function phoneNumber (inputNumber) {
//     isTrueNum = false;
//     const numArr = inputNumber.split('');
//     if (numArr [0] == 0) {
//         numArr.shift();
//     } else if (numArr[0] == 6 && numArr[1] == 2) {
//         numArr.shift();
//         numArr.shift();
//     } else return `${inputNumber} is not a valid phone number`;
//     if (inputNumber.length > 10) return `(62${numArr.splice(0,2).join('')})-${numArr.splice(0,4).join('')}-${numArr.join('')}`
//     else return `${inputNumber} is not a valid phone number`;
// }

// console.log(phoneNumber('085726461545'))