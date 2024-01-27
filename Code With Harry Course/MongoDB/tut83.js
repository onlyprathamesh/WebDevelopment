// Searching Querying data in MongoDB

// using the mobilekart database
use mobilekart

// will return all available items in the database
db.items.find()

// Deleting items from mongo DB

// Will delete the matching document entry and will delete the first entry in case of multi document match
db.items.deleteOne({price : 18000})

// will delete all possible matches 
db.items.deleteMany({price : 90000})
