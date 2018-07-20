const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

// User Schema
const ProductSchema = mongoose.Schema({
    name: {
      type: String
    },
    image: {
      type: String,
      required: false
    },
    price: {
      type: Number,
      required: true
    },
    description: {
      type: String,
      required: false
    }
  });
  
  const Product = module.exports = mongoose.model('Product', ProductSchema);
  
  module.exports.getProducts = function(callback){
    Product.find(callback);
  }
  
//   module.exports.getUserByUsername = function(username, callback){
//     const query = {username: username}
//     User.findOne(query, callback);
//   }
  
//   module.exports.addUser = function(newUser, callback){
//     bcrypt.genSalt(10, (err, salt) => {
//       bcrypt.hash(newUser.password, salt, (err, hash) => {
//         if(err) throw err;
//         newUser.password = hash;
//         newUser.save(callback);
//       });
//     });
//   }
  
//   module.exports.comparePassword = function(candidatePassword, hash, callback){
//     bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
//       if(err) throw err;
//       callback(null, isMatch);
//     });
//   }
  