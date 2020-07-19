var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var db = mongoose.connection;
var Schema = mongoose.Schema;
var dbUrl = 'mongodb://localhost:27017/seller';
var sellerSchema = mongoose.Schema({
    name: String,
password:String,
email:String,
category:String,
adress:String,
phone:String
 });
var Seller = mongoose.model("Seller", sellerSchema);

router.post('/', (req,res,next)=>{
    var personInfo = req.body; //Get the parsed information
    
    if(!personInfo.name || !personInfo.psw ||  !personInfo.email || !personInfo.category || !personInfo.adress
        || !personInfo.phone){
       res.render('show_message', {
          message: "Sorry, you provided worng info", type: "error"});
    } else {
       var newSeller = new Seller({
          name: personInfo.name,
          password: personInfo.psw,
          email: personInfo.email,
          category: personInfo.category,
          adress: personInfo.adress,
          phone: personInfo.phone
       });
         
       newSeller.save(function(err, Person){
          if(err)
             res.render('show_message', {message: "Database error", type: "error"});
          else
             res.render('show_message', {
                message: "New Seller added", type: "success", person: personInfo});
       });
    }
 });

 router.get('/viewseller', function(req, res){
    Seller.find(function(err, response){
       res.json(response);
    });
 });

 router.delete('/deleteseller', (req, res,next)=>{
    Seller.findByIdAndRemove(req.body.id, function(err, response){
       if(err) res.json({message: "Error in deleting record id " + req.params.id});
       else res.json({message: "Seller with id " + req.params.id + " removed."});
    });
 });

 module.exports = router;