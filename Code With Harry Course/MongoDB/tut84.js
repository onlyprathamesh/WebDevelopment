// Searching Querying data in MongoDB

// using the mobilekart database
use mobilekart

// will return all available items in the database
db.items.find()

// Updating items in mongo database

// Will update the item also update only first match in case of many mathches
db.items.updateOne({name : "Realme 9 pro"}, {$set : {price : "FREE"}})

// will update every matches
db.items.updateMany({name : "Moto G 20 Fusion"}, {$set : {price : "FREE", rating : 0}})
