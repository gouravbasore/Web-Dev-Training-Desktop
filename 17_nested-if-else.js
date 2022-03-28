// nested if  else 

// winning number = 19

// 19 your gess is right

let winNumber = 19;
// let userGuess = prompt("Guess a number");
// prompt always take input in STRING

// console.log(typeof userGuess, userGuess);

// // convert string to number 
userGuess = +prompt("Guess a number");
console.log(typeof userGuess, userGuess);

//   === will check the number/string type
if(userGuess === winNumber){
    console.log("Your Guess is right");
}else{
    if(userGuess < winNumber){
        console.log("Your guess is too low!!");
    }else{
        console.log("Your guess is too High!!!");
    }
    
}