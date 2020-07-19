// var express = require('express');
// var mongoose = require('mongoose');
// var router = express.Router();
// var db = mongoose.connection;
// var Schema = mongoose.Schema;
// var dbUrl = 'mongodb://localhost:27017/bidder';
// console.log("test 0");
// var Bidder = Schema({
// name: String,
// password:String,
// confirmpswd:String,
// email:String,
// adress:String,
// phone:String
// });
// console.log("test 1");

// var Bidder = mongoose.model('Bidder', Bidder);
// db.on('error', function () {
// console.log('there was an error communicating with the database');
// });
// mongoose.connect(dbUrl, function (err) {
// if (err) {
// return console.log('there was a problem connecting to the database!' + err);
// }
// });


// router.put('/editbidder', function(req, res, next) {
    
//     console.log(req.body.Id);
//     console.log(req.body.name);
//             Bidder.findOneAndUpdate({_id:req.body._id},{name:req.body.name,
//                 password:req.body.password,
//                 email:req.body.email,
//                 adresss:req.body.adress,
//                 phone:req.body.phone},function(error, results) {
//     if (error) {
//     return next(error);
//     }
//     // Respond with valid data
//     res.json(results);
//     });
//     });
    
// router.post('/addbiddder', function(req, res) {
//     bidder= new Bidder();    
// bidder.name=req.body.name;
// bidder.pswd=req.body.pswd;
// bidder.confirmpswd=req.body.pswd2;
// bidder.email=req.body.email;
// bidder.adress=req.body.adress;
// bidder.phone=req.body.phone;
//         bidder.save(function(error,results) {
// if (error) {
//     console.log(error);
// }
// console.log(results);
// // Respond with valid data
// res.send("bidder added");
// });
// });



// router.delete('/delbidder/:name', function(req, res, next) {
//     bname=req.params.name;
// Bidder.deleteOne({name:bname},function(error, results) {
// if (error) {
// return next(error);
// }
// // Respond with valid data
// res.json(results);
// });
// });



// router.get('/bidder/:name', function(req, res, next) {
// Bidder.findOne({
// name: req.params.name
// }).populate('Bidder').exec(function (error, results) {
// if (error) {
// return next(error);
// }
// // If valid user was not found, send 404
// if (!results) {
// res.status(404).send('No Record Found');
// }
// else{
// // Respond with valid data
// res.json(results);
// }
// });
// });

// router.get('/', function(req, res, next) {
//     res.end("results");
//     });
    
    
// module.exports = router;


var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var db = mongoose.connection;
var Schema = mongoose.Schema;
var dbUrl = 'mongodb://localhost:27017/bidder';
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