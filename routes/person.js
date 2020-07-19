
var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var db = mongoose.connection;
var Schema = mongoose.Schema;
var dbUrl = 'mongodb://localhost:27017/seller';
var personSchema = mongoose.Schema({
    name: String,
    age: Number,
    nationality: String
 });

var Person = mongoose.model("Person", personSchema);

router.post('/', (req,res,next)=>{
    var personInfo = req.body; //Get the parsed information
    
    if(!personInfo.name || !personInfo.age || !personInfo.nationality){
       res.render('show_message', {
          message: "Sorry, you provided worng info", type: "error"});
    } else {
       var newPerson = new Person({
          name: personInfo.name,
          age: personInfo.age,
          nationality: personInfo.nationality
       });
         
       newPerson.save(function(err, Person){
          if(err)
             res.render('show_message', {message: "Database error", type: "error"});
          else
             res.render('show_message', {
                message: "New person added", type: "success", person: personInfo});
       });
    }
 });

 router.delete('/Delete', (req, res,next)=>{
   Person.findByIdAndRemove(req.body.id, function(err, response){
      if(err) res.json({message: "Error in deleting record id " + req.params.id});
      else res.json({message: "Person with id " + req.params.id + " removed."});
   });
});




 router.get('/people', function(req, res){
   Person.find(function(err, response){
      res.json(response);
   });
});

// router.put('/people/:id', function(req, res){
//    Person.findByIdAndUpdate(req.params.id, req.body, function(err, response){
//       if(err) res.json({message: "Error in updating person with id " + req.params.id});
//       res.json(response);
//    });
// });


 module.exports = router;