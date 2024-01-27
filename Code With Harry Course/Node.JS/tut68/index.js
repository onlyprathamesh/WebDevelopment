console.log('This is Index ');

// const average = require('./mod');
// console.log(average([3,4]));


const mod = require('./mod');
console.log("Average function imported from module is " + mod.avg([3,4]));
console.log("The name imported from module is : " + mod.name);
console.log("The age imported from module is : " + mod.age);
console.log("The repo imported from module is : " + mod.repo);