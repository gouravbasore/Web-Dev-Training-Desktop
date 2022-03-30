
//////     Nested destructuring   ////////

const users = [
    {userId: 1, firstName: 'Gourav', gender:  'male'},
    {userId: 2, firstName: 'mohit', gender:  'male'},
    {userId: 3, firstName: 'goldy', gender:  'male'},

]

const [user1, user2, user3] = users;
// console.log(users);
console.log(user1);

const [{firstName: user1Nmae, userId}, , {gender: user3gender}] = users;

console.log(userId);
console.log(user1Nmae);
console.log(user3gender);

