// if
// else if
// else

let temprature = +prompt("Enter the value ");
console.log("Temprature = ",temprature);

if(temprature < 0){
    console.log("Extremely Cold");
}else if(temprature < 15){
    console.log("It is Cold outside");
}else if(temprature < 25){
    console.log("Weather is Okey");
}else if(temprature < 35){
    console.log("Lets g for Swim");
}else if(temprature < 45){
    console.log("Turn on AC");
}else{
    console.log("It is too hot!");
}
