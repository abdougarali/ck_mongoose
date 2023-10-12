const mongoose=require('mongoose');


const personschema=mongoose.Schema({
  name:{type:String , required:true},
  age:Number,
  favoritfood:[String],

});

const User=mongoose.model('user',personschema);

module.exports=User;