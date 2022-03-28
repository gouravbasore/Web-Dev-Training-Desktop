// trim() 
// toUUperCase() 
// toLowerCase() 
// slice 
//               123456789012               //12
let firstName = "   Gourav   ";
let newString = firstName.trim();

// find lenght 

console.log(newString);                     //trim the spaces
console.log(firstName.length);              //12
console.log(newString.length);              //6

firstName = firstName.toUpperCase();        //Convert all letters to UPPER CASE
console.log(firstName);                     

firstName = firstName.toLowerCase();        //Convert all letters to LOWER CASE
console.log(firstName);

// slice method 
// start index 
let newStrings = firstName.slice(0,4);
console.log(newStrings);

console.log(firstName.slice(0,4));          //g
console.log(firstName.slice());             //gives the same string
console.log(firstName.slice(0));            //gives the same string
console.log(firstName.slice(5));            //gives the "urav   " string
console.log(firstName.slice(6,8));          //gives the "ra" string