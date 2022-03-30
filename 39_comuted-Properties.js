// computed properties 

const key1 = "objkey1";
const key2 = "objkey2";

const value1 = "myValue1";
const value2 = "myValue2";

// const obj = {
//     objkey1 : "myValue1";
//     objkey2 : "myValue2";
// }

// const obj = {
//     key1 : value1,
//     key2 : value2
// }

// const obj = {
//     [key1] : value1,
//     [key2] : value2
// }

/////    OR  /////
const obj = {}
obj[key1] = value1;
obj[key2] = value2;

console.log(obj);