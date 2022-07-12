// ARRAYS
// data structure used 2 represent a list of items.

let b = ["Mango","Apple"];
b.push("Orange")        // adds to the end of the array
b.unshift("Grapes")     //adds to the start of the array
b.pop()                 //remove the last
b.shift()               //remove the first

let c = new Array("Banana","Kiwi");
console.log(b);

                          // map()  iterate through all the elements (callback function - 
                          //function taken as an argument) in the array
                          // backtics
let d = c.map(item => `I love ${item}`);
let e = c.map(function(item){
    return `I love ${item}`
})
console.log(d);
console.log(e);

//OBJECTS - Takes in keys & values
let people = {
    name: "Rose",
    age : 23,
    country : "Kenya"
};
console.log(people["country"]);    //accessing the properties
console.log(people.country);

var person = new Object(people);    //create an instance of people *you can give other properties
console.log(person.name);
person["eyes"] = "Black";
console.log(person);

for ([key,values] of Object.entries(person)){    
    console.log(`${key}: ${values}`);
}
Object.freeze(person)       // neither modify or add
person['School'] = "Akirachix";

// Object.seal(person)    //can modify but not add

// delete(person.age)
// console.log(person);

// Object.assign(person, {school:"Akirachix"})
// console.log(person);

// METHODS

var student = {
    name: "Rose",
    country : "Kenya",
    hobby: function(){                 // methods * properties whose values are functions
        console.log(`My name is ${this.name} and my hobby is cooking`);    // this represents an object
        return "My favourite hobby is baking";

    },
    friends:{
        name: "Cess",
        age: 24,
        hobby:{
            first: "Cooking"

        }
        
    }
};
console.log(student.country);
console.log(student.hobby());
console.log(student.friends.name);
console.log(student.friends.hobby.first);

// Nested objects  *dot notation 

