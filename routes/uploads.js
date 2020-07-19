var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
// const multer= require('multer');

var multer = require('multer');
var path = require('path');


var db = mongoose.connection;
var Schema = mongoose.Schema;
// var dbUrl = 'mongodb://localhost:27017/uploads';
var dbUrl = 'mongodb+srv://EasyBargain:EasyBargain#123#@cluster0.j9jah.mongodb.net/EasyBargain?retryWrites=true&w=majority';
var storage= multer.diskStorage({
    destination:"./public/uploads",
    filename:(req,file,cb)=>{
      cb(null,file.fieldname+"_"+Date.now()+path.extname(file.originalname));
    }
  });
  var upload = multer({
    storage:storage
  }).single('file');
  
var imageSchema = mongoose.Schema({
    
productimage:String,
 });


var Image = mongoose.model("Image", imageSchema);

router.post('/',upload,(req,res,next)=>{
    

       var newImage = new Image({
          
          productimage: req.file.filename,
        
       });
         
       newImage.save(function(err, Product){
          if(err)
             res.render('show_message', {message: "Database error", type: "error"});
          else
             res.render('show_message', {
                message: "New image added", type: "success", person: personInfo});
       });
    });
    router.get('/viewuploads', function(req, res){
        Image.find(function(err, response){
           res.json(response);
        });
     });




     
    module.exports = router;
