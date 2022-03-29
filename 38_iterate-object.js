// how to Iterate Object (iterate meaning looping)
const person = {
    name: "Gourav",
    age: 30,
    "person hobbies": ["cricket", "sleeping", "listening music"]
}

// // for in loop
// for(let key in person){
//     console.log(key);       // shows only keys values(name, age, hobbies)
// }

// for(let key in person){
//     // console.log(person[key]);  //shows data in keys
//     console.log(`${key} : ${person[key]}`);     // template string
// //     console.log(key, ":", person[key]);      //simple method
//  }

 
// Object.keys 
// console.log(Object.keys(person));
// const val = Array.isArray(Object.keys(person)); // check array
// console.log(val);
 for(let key of Object.keys(person)){
    //  console.log(key);
    // console.log(person[key]);
    console.log(`${key} : ${person[key]}`);

    }