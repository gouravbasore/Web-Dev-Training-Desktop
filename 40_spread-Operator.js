// Spread Opeator 

// const array1 = [1,2,3];
// const array2 = [5,6,7];

// // const newArray = [...array1, array2]; // [1, 2, 3, Array(3)] array2 index will shows
// //const newArray = [...array1, ...array2]; //both arrays will spread

// // const newArray = [..."abc"];
// // const newArray = [...123456789];  // numbers are not iterable **(use always string)**
//     const newArray = [..."123456789"];
// console.log(newArray);

// Spread Opeator in objects

const obj1 = {
    key1: "value1",
    key2: "value2",
};
const obj2 = {
    key3: "value3",
    key4: "value4",
};

// const newObject = {...obj1, ...obj2};
const newObject = {...obj1, ...obj2, key69: "value69"};
console.log(newObject);