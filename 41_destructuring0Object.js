// Object destructuring 

const band = {
    bandName: "led zeppelin",
    famousSong: "stairway to haven",
    year: 1968,
    anotherFamousSong: "Zirakpur",
};

// const bandName = band.bandName;
// const famousSong = band.famousSong;
// console.log(bandName, famousSong);

// shortcut with destructuring

// const {bandName, famousSong} = band;
// console.log(bandName, famousSong);

let {bandName, famousSong, ...restProp} = band;
console.log(bandName, famousSong);
console.log(restProp);

