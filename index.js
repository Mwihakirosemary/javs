// console.log('Hello World');
let same = 'Rose'; // string literal
let age = 23;       // number literal
let isApproved = false;  // boolean literal
let firstName = undefined; 
let selectedColor = null;  

// Cannot be a reserved keyword
//Should be meaningfull (eg.x)
// Cannot start with a number
// Cannot contain a space or hyphen
// Var are case sensitive
// js Dynamic - type of var can change at runtime

let interestRate = 0.3;
interestRate = 1;
console.log(interestRate)
// value types (string,number,boolean,undefined(is a type an value),null)
// reference types(Object - has properties,Arrays,Function)

let name = 'Rose';
let mage = 23;  
let person = {
    name: 'Rose',
    mage: 23

};
// dot notation
person.name = 'Mary';
// bracket notation
let selection = 'name';
person[selection] = 'Mwihaki';
console.log(person);

// ARRAYS
// data structure used 2 represent a list of items.
let selectedColos = ['red','blue'];
selectedColos[2] = 10;
console.log(selectedColos.length);

//FUNCTIONS
// A set of statement that either performs a task or calc a value
// when declaring a funct no need of a ; bcz it's not a var(function declaration)
// perfoming a task

function greet(myname, lastName){
    console.log('Hello' + myname + '' + lastName);
}
// john is an argument
greet('John','Smith');
// calc a value

function square(number){
    return number * number;
}
console.log(square(2));

document.write("Anita B")

// document.getElementById("button").addEventListener('click',function{
//     document.write("Hello");
// })

let student = {
    name: "Rose",
    age : 23,
    class : "AnitaB"
};
console.log(age in student)
delete student.name
console.log(student);
console.log(typeof(x));

var today = new Date().toLocaleTimeString();
let m = (today instanceof Date)? true : false;
console.log(typeof(today));

var trees = ["Rosewood","Redwood","Maple","Oak","Cedar"];
console.log(11 in trees)