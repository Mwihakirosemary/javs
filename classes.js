// class Students{   // Object constructor
//     constructor(name,age,school){
//         this.name = name
//         this.age = age
//         this.school = school
//         this.hobby = function(){
//             return "I love board games"
//         }
//     }

// }
// Students.prototype.country = function(){
//     return "I love Kenya"

// }
// var firstStudent = new Students("Cudra",19,"Akirachix");  // this is an object
// console.log(firstStudent.hobby());    
// console.log(firstStudent.school);     
// console.log(firstStudent.country());       
// //*adding prototypes inside a class

function Students(name,age,school){
    this.name = name
    this.age = age
    this.school = school
    this.hobby = function(){
        return "I love board games"
    }
}
var secondStudent = new Students("Rosemary",23,"Akirachix");  // this is an object
console.log(secondStudent);


// **array destructuring 
var names = ["Chiri","Zipporah","Shammim"];
var[conslate, ...others] = names;    //assigning to this var
console.log(conslate);
console.log(others);


// Write a program to calculate purchases from a kiosk. For e.g. given the fruit name 
// 'orange' the program should fetch its price (30.00) and multiply with the quantity 
// requested (2) and return total cost in this printed format (2 Oranges for KES 
// 60.00). 
// calculateFruitCost(fruitName, quantity)
// For example, calculateFruitCost('orange', 2) should return "2 Oranges for KES 60

class Purchases{
    constructor(name,price,quantity){
        this.name = name
        this.price = price
        this.quantity = quantity

    }
}
var fruit = new Purchases("Orange",30,3);
console.log(fruit);
