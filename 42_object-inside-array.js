// object inside arrays 
// very useful in real world application 

const users = [
    {userId: 1, firstName: 'Gourav', gender:  'male'},
    {userId: 2, firstName: 'mohit', gender:  'male'},
    {userId: 3, firstName: 'goldy', gender:  'male'},

]
// for(let user of users){
//     console.log(user);
// }
// for(let user of users){
//     console.log(user.userId);
// }
for(let user of users){
    console.log(user.firstName);
}