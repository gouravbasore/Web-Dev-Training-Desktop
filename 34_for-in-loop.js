// for in loop in array 

const fruits = ["apple", "mango", "grapes"];
const fruits2 = [];

// for(let index in fruits){       // it will shows the Index
//     console.log(index);
// }

// for(let index in fruits){       // it will shows the arrays      
//     console.log(fruits[index]);
// }

for(let index in fruits){       // it will shows the arrays      
    fruits2.push(fruits[index].toUpperCase());
}
console.log(fruits2);

