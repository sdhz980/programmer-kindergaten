console.log("Hello World");
// Test Lur
// console.log("Hello World");
/*
*/


//let message;
//message = "hello & world";
//console.log(message);

var globalVariable = "ini adalah var";
let replaceable ="ini adalah replaceable";
const notreplaceable = "ini adalah yang tidak bisa diganti"

const person = {
    key: "arya",
    key1: "agus"
}

console.log(person);
console.log(person.key);
console.log(person.key1)

const array = ["satu","dua","tiga"];
console.log(array)

const pesan = "javascript";
const count = 1;

console.log(typeof pesan);
console.log(typeof count);

const count1 = 4;
let count2 = count1;
count2 = 10;

console.log(count1);
console.log(count2);

let person1 = {
    name: "budi"
}
let person2 = person1;
person2.age = 20;

console.log(person2);


// const nama = 'budi';
const nama1 = 'sultan';
const namasplit = [];

/*
console.log(nama.toUpperCase());
console.log(nama.toLowerCase());
console.log(nama.replace("u" , "H"));
console.log(nama1.slice(0,3));
console.log(nama1.split(""));
console.log((nama.concat(nama1)));
console.log(nama.includes("bu"));
*/

// const nama = "budi";
// const message = "welcome";
// console.log(nama + " " + message);
// console.log(`${nama} ${message}`);

// console.log(Boolean(" "));
// console.log(Boolean(""));
// console.log(Boolean(1));
// console.log(Boolean(0));

// const Dateku = new Date();
// console.log(Dateku);

// const jan_1970 = new Date(0);
// console.log(jan_1970);

// console.log(new Date(0. *24 * 3600* 10000));

// const Date5Lima = new Date("2023-05-05");
// console.log(Date5Lima);

// console.log(new Date());

const now = new Date();

//get methods
console.log(now.getFullYear());
console.log(now.getMonth()+1);
console.log(now.getDate());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getMilliseconds());

//set methods
now.setDate(11);
now.setFullYear(2027);
now.setMonth(3);
console.log(now);




//-----------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------


/*
Write a code to find area of rectangle.
Example : length = 5, width = 3 → 15
*/

let length;
let height;
length = 5;
width = 3;
let areaRectangle = length * width;
console.log(`the result of find are rectangle with length = 5, and width = 3 ,will be equal => ${areaRectangle}`);

/*
Write a code to find perimeter of rectangle.
Example : length = 5, width = 3 → 16
*/

let perimeterLength;
let perimeterWidth;
perimeterWidth = 3;
perimeterLength = 5;
let perimeterRectangle = 2 * (perimeterLength + perimeterWidth);
console.log(`perimeter of rectangle with the length = 5 and width = 3,the result will be => ${perimeterRectangle}`);

/*
Write a code to find diameter, circumference and area of a circle.
Example : radius = 5
Output : diameter = 10, circumference = 31.4159, area = 78.539
*/

let pi = Math.PI;
let radius;
radius = 5;
let diameter = 2 * radius;
let circleCircumference = 2 *  pi * radius;
let circleArea = pi * radius ** 2;
console.log(`If the radius = 5,diameter of the circle will be => ${diameter} , and circle circumference will be = > ${circleCircumference} ,also circle area will be => ${circleArea}`);

/*
Write a code to find angles of triangle if two angles are given.
Example : a = 80, b = 65 → 35
*/

let angle1;
let angle2;
angle1 = 80;
angle2 = 65;
let resultAngle = 180 - (angle1+angle2);
console.log(resultAngle);

/*
Write a code to get difference between dates in days.
Example : date1 = 2022-01-20, date2 = 2022-01-22 → 2
*/

let date1 = Date.parse(new Date("2022-01-20"));
let date2 = Date.parse(new Date("2022-01-22"));
let betweenDate = (new Date(date2-date1))/(24*3600*1000);
console.log(betweenDate);

/*
Write a code to convert days to years, months and days (Notes: 1 year : 365 days, 1 month : 30 days).
Example : 400 days → 1 year, 1 month, 5 days
Example: 366 days → 1 year, 0 month, 1 day
*/

let convertDate = 366; //the number days will convert to
convertToDate = new Date(convertDate*1000*3600*24);
let objectDate = {
    year: convertToDate.getFullYear()-1970,
    month: convertToDate.getMonth(),
    days: convertToDate.getDate()
};
console.log(`${objectDate.year} Year ${objectDate.month} Month ${objectDate.days} Day`);