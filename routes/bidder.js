var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var db = mongoose.connection;
var Schema = mongoose.Schema;
// var dbUrl = 'mongodb://localhost:27017/bidder';
var dbUrl = 'mongodb+srv://EasyBargain:EasyBargain#123#@cluster0.j9jah.mongodb.net/EasyBargain?retryWrites=true&w=majority';
var bidderSchema = mongoose.Schema({
    name: String,
password:String,
confirmpswd:String,
email:String,
adress:String,
phone:String
 });
var Bidder = mongoose.model("Bidder", bidderSchema);

router.post('/', (req,res,next)=>{
    var personInfo = req.body; //Get the parsed information
    console.log(personInfo);
    if(!personInfo.name || !personInfo.password || !personInfo.cpassword || !personInfo.email || !personInfo.adress

      || !personInfo.phone){
       //res.render('show_message', {
         // message: "Sorry, you provided worng info", type: "error"});
         console.log("Error")
         
         res.json({error:"Missing Data"});

    } else {
       var newPerson = new Bidder({
          name: personInfo.name,
          password: personInfo.password,
          confirmpswd: personInfo.cpassword,
          email: personInfo.email,
          adress: personInfo.adress,
          phone: personInfo.phone
       });
       console.log(newPerson);

       newPerson.save(function(err, Person){
         if(err){
            console.log(err);
            res.json({error:err});
            //res.render('show_message', {message: "Database error", type: "error"});
           
         }
         else{
            console.log("Added")
         res.json({message:"Added Successfully"})
        
    }
   });
}
});

 router.get('/viewbidder', function(req, res){
    Bidder.find(function(err, response){
       res.json(response);
    });
 });

 router.get('/authenticateuser', function(req, res){
   Bidder.findOne(function(err, response){
      res.json(response);
   });
});

router.post('/logincheck', function(req, res){
   Bidder.findOne({'name':req.body.name, 'password': req.body.password}, function(err, response){
      res.json(response);
   });
});

router.get('/authenticateuser/:username', function(req, res){
   Bidder.findOne({'name':req.params.username},function(err, response){
      res.json(response);
   });
});

 router.delete('/deletebidder', (req, res,next)=>{
    Bidder.findByIdAndRemove(req.body.id, function(err, response){
       if(err) res.json({message: "Error in deleting record id " + req.params.id});
       else res.json({message: "Bidder with id " + req.params.id + " removed."});
    });
 });

 module.exports = router;