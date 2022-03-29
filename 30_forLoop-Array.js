// for loop in array 

let fruits = ["apple", "mango", "grapes", "banana"];

// for(let i = 0; i <= 9; i++){
//     console.log(i);
// }

// console.log(fruits.length);
// console.log(fruits[fruits.length -1]);

// for(let i = 0; i < fruits.length; i++){
//     // console.log(fruits[i]);
//     console.log(fruits[i].toLocaleUpperCase());
// }

let fruits2 = [];

for(let i = 0; i < fruits.length; i++){
   fruits2.push(fruits[i].toLocaleUpperCase());
}
console.log(fruits2);
