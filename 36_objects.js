// objects (objects are also refrence type)
// arrays are good but not sufficients
// for real world Data
// objects store key value pairs
// objects dont have index

// how to create objects

// const person = {name:"Gourav",age:30};   // name and age are the properties or the KEYS of the object
// console.log(person);
// console.log(typeof person);

const person = {
    name: "Gourav",
    age: 30,
    hobbies: ["cricket", "sleeping", "listening music"]
}
console.log(person);

// // how to access data from objects
console.log(person.hobbies);

// console.log(person.name); //both the syntex we can use to access the keys.
console.log(person["name"]);
// console.log(person.age);     // dot notation
console.log(person["age"]);     // bracket notation

// how to add key values pair to objects
// person.gender  = "male";     // dot notation
person["gender"]  = "male";     // bracket notation
console.log(person);


