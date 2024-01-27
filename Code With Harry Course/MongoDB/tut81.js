// Inserting data in MongoDB

show dbs  //to show all available databases

use mobilekart //to use mobilekart database or create if not available

db.items.insertOne({name : "oppo", price : 10000, rating : 4, qty : 1000, sold : 500}) // inserting items into database

db.items.find() //used to display all sotred items of database

db.items.insertMany([{name : "Realme 9 pro", price : 18000, rating : 4, qty : 11000, sold : 5200}, {name : "Moto G 20 Fusion", price : 22000, rating : 4.5, qty : 1000, sold : 900}, {name : "Apple iphone 14 pro", price : 90000, rating : 10, qty : 10000, sold : 10000}]) // Inserts many items in the database


db.items.insertOne({name : "Prathamesh Kamble", email : "Prathameshkamble2021.com@mmcoe.edu.in", year : 2, branch : "Computer", Event : "Web-Development Bootcamp"})

db.items.insertMany([{name : "Komal Mhaisane", email : "komalmhaisane2021.comp@mmcoe.edu.in", year : 2, branch : "Entc", Event : "App-Development Bootcamp"}, {name : "Ayushi Meshram ", email : "ayushimeshram2021.comp@mmcoe.edu.in", year : 2, branch : "AI&DS", Event : "GDSC meeting"},{name : "New User", email : "newuser2021.comp@mmcoe.edu.in", year : 2, branch : "Computer", Event : "Code-Rank"}])