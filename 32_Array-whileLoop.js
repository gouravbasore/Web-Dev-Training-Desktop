// while loop in array 

const fruits = ["apple", "mango", "grapes"];
let i = 0;
// while(i < fruits.length){
//     console.log(fruits[i]);
//     i++;
// }
let fruits2 = [];
while(i < fruits.length){
    fruits2.push(fruits[i]);
    i++;
}
console.log(fruits2);