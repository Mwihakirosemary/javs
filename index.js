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

let b = ["Mango","Apple"];
b.push("Orange")        // adds to the end of the array
b.unshift("Grapes")     //adds to the start of the array
b.pop()                 //remove the last
b.shift()               //remove the first

let c = new Array("Banana","Kiwi");
console.log(b);

// map()  iterate through all the elements (callback function - function taken as an argument) in the array
// backtics
let d = c.map(item => 'I love ${item}');
let e = c.map(function(item){
    return 'I love ${item}'
})
console.log(d);
console.log(e);

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

// Object Oriented Programming
// concepts : 1.Encapsulation 2. Abstraction 3. Inheritance 4. Polymorphism
// 1.combining related var and functions into a unit - object (var = property-color,make,model, function = method -start(),stop())

let baseSalary = 30_000;   // procedural
let overtime = 10;
let rate = 20;

function getWage(baseSalary,overtime,rate){
    return baseSalary + (overtime * rate);
}

let employee = {          // oop
    baseSalary: 30_00,
    overtime: 10,
    rate: 20,
    getWage: function(){    // no parameters coz they are used as properties
        return this.baseSalary + (this.overtime * this.rate);
    }

};
employee.getWage();

// 2.simpler interface & reduce impact of change
// 3.eliminate redundant code
// 4.poly - many,morphism - form