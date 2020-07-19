var express = require('express');
var mongoose = require('mongoose');
const { response } = require('../app');
var router = express.Router();
var db = mongoose.connection;
var Schema = mongoose.Schema;
var dbUrl = 'mongodb://localhost:27017/product';
var productSchema = mongoose.Schema({
    name: String,
price:String,
sname:String,
bidhistory:Array,
description:String,
adress:String,
auctiontype:String,
pic:String,
flag: Boolean
 });
var Product = mongoose.model("Product", productSchema);

router.post('/', (req,res,next)=>{
    var personInfo = req.body; //Get the parsed information
    console.log(personInfo);
    if(!personInfo.auctiontype||!personInfo.name || !personInfo.price ||  !personInfo.sname || !personInfo.description || !personInfo.adress){
       //res.render('show_message', {
         // message: "Sorry, you provided worng info", type: "error"});
         res.json({error:"Missing Data"})
    } else {
       var newProduct = new Product({
          name: personInfo.name,
          price: personInfo.price,
          sname: personInfo.sname,
          description: personInfo.description,
          adress: personInfo.adress,
          auctiontype:personInfo.auctiontype,
          pic:personInfo.name
       });
         
       newProduct.save(function(err, Person){
          if(err){
             console.log(err);
             res.json({error:err});
             //res.render('show_message', {message: "Database error", type: "error"});
            
          }
          else{console.log("Added")
          res.json({message:"Added Successfully"})
            // res.render('show_message', {
               //  message: "New Product added", type: "success", person: personInfo});
            }
       });
    }
 });

 router.get('/viewproduct/find', function(req, res){
   //  var tofind = req.body
    Product.find({'auctiontype':'Live Session Auction'},function(err, response){
       res.json(response);
    });
 });
 router.get('/viewproduct', function(req, res){
   Product.find(function(err, response){
      res.json(response);
   });
});
router.get('/viewordinaryproduct', function(req, res){
   Product.find({'auctiontype':'Ordinary Auction'},function(err, response){
      res.json(response);
   });
});

router.get('/viewproduct/:id', function(req, res){
   Product.findById(req.params.id, function (err, response){
      res.json(response);
   });
});



 router.delete('/deleteproduct/:id', (req, res,next)=>{
    Product.findByIdAndRemove(req.params.id, function(err, response){
       if(err) res.json({message: "Error in deleting record id " + req.params.id});
       else{ 
       res.json({message: "Product with id " + req.params.id + " removed."});
         console.log("Record Deleted")
       }   });
 });
 router.post('/updateproduct', (req, res,next)=>{
   Product.findOneAndUpdate({name:req.body.prodName},{bidhistory:req.body.bidhistory},function(err, response){
      if(err) res.json({message: "Error in updating record "});
      else res.json({message: "Product with name " + req.body.name + " updated."});
   });
});
router.put('/updateproduct/:id', (req,res,next)=>{
   console.log(req.body)
   console.log(req.params.id)
   Product.findOneAndUpdate({_id:req.params.id}, req.body, function(err, response){
      if(err){
         res.json({message: "Error in updating record"})
      }
      else{
         res.json({message: "Product with id" + {id:req.params.id} + "updated"});
         console.log("Record Updated");
      }
   })
})

router.get('/view/:name', (req, res,next)=>{
   Product.findOne({name:req.params.name},function(err, response){
      if(err) res.json({message: "Error in updating record "});
      else res.json(response);
   });
});


/////////////////////////// USER ??//////////////////////////////////





var userSchema = mongoose.Schema({

   name: String,
   prodName:String,
   email:String,
   price:String,
   
});


var Winner = mongoose.model("winner", userSchema);


router.post('/add/winner', function (req, res) {

   console.log(req.body)

   var newWinner = new Winner(req.body)


   newWinner.save(function (err, winner) {
      if (err) {
         console.log(err)
         res.end('failed to add');
      }

      else {
         var nodemailer = require('nodemailer');

         var transporter = nodemailer.createTransport({
         service: 'gmail',
         auth: {
            user: 'umersayeed77@gmail.com',
            pass: 'rollinsmania'
         }
         });

         var mailOptions = {
         from: 'umersayeed77@gmail.com',
         to: winner.email,
         subject: 'Order Placed',
         text: 'Congratulations! You have won the product and your order has been placed.'
         };

         transporter.sendMail(mailOptions, function(error, info){
         if (error) {
            console.log(error);
         } else {
            console.log('Email sent: ' + info.response);
         }
         });
         Product.updateOne({ name: req.body.prodName }, {flag: false}, function(
            err,
            result
          ) {
            if (err) {
              console.log(err);
            } else {
              console.log(result);
            }
          });
         res.json({
            "winner": newWinner
         });
      }
      
   });


});



/////////////////////////// USER ??//////////////////////////////////

 module.exports = router;