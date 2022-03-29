// Array destructuring 

const myArray = ["value1", "value2", "value3", "value4"];
// let myVar1 = myArray[0];
// let myVar2 = myArray[1];

// console.log("value of myVar1 = ", myVar1);
// console.log("value of myVar1 = ", myVar2);


// let [myVar1, , myVar2] = myArray;         // use of , , will skip the current position value
// console.log("value of myVar1 = ", myVar1);
// console.log("value of myVar2 = ", myVar2);

// let myNewArray = myArray.slice(2);      //get the value from 2 index and put it in variable
// console.log(myNewArray);
 
let [myVar1, myVar2, ...myNewArray] = myArray;         // use of ... will take the next value
console.log("value of myVar1 = ", myVar1);
console.log("value of myVar2 = ", myVar2);
console.log("value of myNewArray = ", myNewArray);
