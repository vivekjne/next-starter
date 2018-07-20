const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

// User Schema
const SliderSchema = mongoose.Schema({
    name: {
      type: String
    },
    image: {
      type: String,
      required: false
    },
    
  });
  
  const Slider = module.exports = mongoose.model('Slider', SliderSchema);
  
  module.exports.getSliders = function(callback){
    Slider.find(callback);
  }
  
//   module.exports.getUserByUsername = function(username, callback){
//     const query = {username: username}
//     User.findOne(query, callback);
//   }
  
  module.exports.addSlider = function(newSlider, callback){
   
     
      
       
        newSlider.save(callback);
     
   
  }
  
//   module.exports.comparePassword = function(candidatePassword, hash, callback){
//     bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
//       if(err) throw err;
//       callback(null, isMatch);
//     });
//   }
  