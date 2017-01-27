let userArray = process.argv.slice(2);

// console.log(userArray);
let [,username,email] = userArray;
let userData = {};
[,userData.username,userData.email] = userArray;
// console.log(data); 


console.log(userData); // {username: "jdoe", email: "john@doe.com"}