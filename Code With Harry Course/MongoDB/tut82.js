// Searching Querying data in MongoDB

// using the mobilekart database
use mobilekart

// will return all available items in the database
db.items.find()

// will show all the items with rating 4
db.items.find({rating : 4})


// will show all the items with rating 4 and above (gte : grater than equal)
db.items.find({rating : {$gte : 4}})

// (gt : greater than)
db.items.find({rating : {$gt : 4}})

// Using AND operator in between them by using comma ,
db.items.find({rating : {$gt : 4}, price : {$gt : 20000}})

// (lt : less than)
db.items.find({rating : {$lt : 4}, price : {$gt : 20000}})

// Using OR operator by using $or
db.items.find({$or : [{rating :{$gt : 4}}, {price : {$lt : 15000}}]})


// More sofistecated way to represent, the brackets are confusing
db.items.find({
    $or : 
    [
        {rating :
            {$gt : 4
            }
        }, 
        {price : 
            {$lt : 15000
            }
        }
    ]
})

