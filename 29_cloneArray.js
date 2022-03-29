// how to clone array 
// how to concatenate two arrays 

let array1 =["item1", "item2"];

// let array2 = array1.slice(0);
// let array2 = array1.slice(0).concat("item3", "item4");
//let array2 = [].concat(array1);
// let array2 = [].concat(array1,["item3"]);


//**********NEW WAY*******/
// SPREAD Operator 

// used when all elements array need to be included in a list of some kind.
// let array2 = [...array1];
let onemoreArray = ["item3", "item4"];
array2 = [...array1, ...onemoreArray]; 

array1.push("item3");

console.log(array1===array2);
console.log(array1);
console.log(array2);