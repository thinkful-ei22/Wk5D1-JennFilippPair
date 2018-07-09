'use strict';

//get all

db.restaurants.find().pretty();

//limit and sort

db.restaurants.find().sort({name: 1}).limit(5).pretty();

db.restaurants.find().limit(5).sort({name: 1}).pretty();

//get by _id

db.restaurants.find({_id:ObjectId('59074c7c057aaffaafb0da88')});

//get by value

db.restaurants.find({borough:'Queens'}).pretty();

//count

db.restaurants.count();

