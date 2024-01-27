const fs = require("fs");

let text = fs.readFileSync("demo.txt", "utf-8");
console.log("The content of file is : ");
console.log(text);

console.log("The content of file is changed : ");
text = text.replace("Baymax", "Ironman");
console.log(text);

console.log("Creating the new file .....");
fs.writeFileSync("new.txt", "Hey Man i finally started with my backend");

