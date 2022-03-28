let firstName = "Gourav";

// 0 1 2 3 4 5     //INDEX
// G o u r a v     //VARIABLE
// 1 2 3 4 5 6     //LENGTH

console.log(firstName);
console.log(firstName[3]);      //print index at 3 ---> r
console.log(firstName[1+1]);    //print index at 2 ---> u
console.log(firstName[332]);    //undefined

console.log(firstName.length);                  //6
console.log(firstName[firstName.length-1]);     //print last index