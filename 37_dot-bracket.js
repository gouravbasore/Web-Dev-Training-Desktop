// difference between dot and bracket notations 
const key = "email";
const person = {
    name: "Gourav",
    age: 30,
    "person hobbies": ["cricket", "sleeping", "listening music"]
}

// space between the word is not allowed in java Script 
// but with the use of BRACKET NOTATION we can access the strings with spaces 

console.log(person["person hobbies"]);  // bracket notation can be used in spaces strings

// add "email" key in the object 
person[key] = "gourvbasore@gmail.com";
console.log(person);