// Synchronous or Blocking
// -line by line execution

// Asynchronous or Non-Blocking
// -line by line execution not gauranteed
// -callbacks will fire

const fs = require('fs');
fs.readFile('demo.txt', 'utf-8', (err, data)=>{
    console.log(err,data);
});

console.log("This is the message which will get printed before file");