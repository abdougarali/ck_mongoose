
const app=require('express')();
const http=require('http').Server(app)
const mongoose=require('mongoose');
// require("dotenv").config()
const User=require('./person');
const { error } = require('console');
const { ObjectId } = require('mongodb');

// dotenv.config();
require ('dotenv').config();

const mongo_URL=process.env.MONGO_URI;
console.log(process.env.MONGO_URI)

mongoose.connect(mongo_URL,{useNewUrlParser:true ,useUnifiedTopology:true})
.then(()=>{
    console.log('connected to the database ');
}).catch((error)=>{
    console.error('data connection error : ',error);
});




const  newUser=new User({

    name:'garali abdou',
    age:23,
    favoritfood:['pizza','Burger'],
 });


//  newUser.save(
// //     (err,data)=>{
// //     if(err){
// //         console.log('Error',err)
// //     } else{
// //         console.log('saved new person :',data);
// //     }
// //     mongoose.connection.close();
// //  }
//  ).then((data)=>console.log('saved new person :',data))
//  .catch((err)=>console.log(err))





const arrayOfPeople=[
  {
   name:'hama',
   age:30,
   favoritfood:['taco','spaghetti']

  },
  {
    name:'hwass',
    age:20,
    favoritfood:['makloub','souchi']
 
   },
 ] 

//  User.create(arrayOfPeople)
//     .then((people)=>console.log('create people',people))
//     .catch((error)=>console.log('Error',error))

    // if(err){
    //     console.log('Error',err)
    // }else{
    //     console.log('people created : ',people)
    // }



//   User.findOne({name:'hama'}).then((data)=> console.log('people with the name hama',data))
//   .catch((error)=>console.log('Error',error))



//   User.findOne({favoritfood:'pizza'}).then((person)=>console.log('person how like pizza',person))
//   .catch((err)=>console.log('food not found',err))

  



 User.findOne({_id:"6527cbbd06121514d9f41ac2"}).then((person)=>console.log('this person is',person))
 .catch((err)=>console.log('this person not found ',err))
    


http.listen(3000,(err)=>{
    err? console.log(err) :
    console.log('server is running');
})