'use strict';

//get all

// db.restaurants.find().pretty();

//limit and sort

// db.restaurants.find().sort({name: 1}).limit(5).pretty();

// db.restaurants.find().limit(5).sort({name: 1}).pretty();

//get by _id

// db.restaurants.find({_id:ObjectId('59074c7c057aaffaafb0da88')});

//get by value

// db.restaurants.find({borough:'Queens'}).pretty();

//count

// db.restaurants.count();

//Count by nested value

// db.restaurants.find({
//   "address.zipcode" : "11206"
// }).count();

//Delete by id

// const deleteId = ObjectId("59074c7c057aaffaafb0dbb7");

// db.restaurants.remove({
//   _id: deleteId
// });

// db.restaurants.find({
//   _id: deleteId
// });

//Updating a single document

// const updateId = ObjectId('59074c7c057aaffaafb0da57');

// db.restaurants.updateOne({
//   _id: updateId
// }, {
//   $set: {
//     name: 'Bizz Bar Bang'
//   }
// });

// db.restaurants.findOne({
//   _id: updateId
// });

//Updating many documents


// db.restaurants.updateMany({
//   'address.zipcode' : '10035'
// }, {
//   $set: {
//     'address.zipcode' : '10036'
//   }
// });

// db.restaurants.find({
//   'address.zipcode' : '10035'
// }).count();



