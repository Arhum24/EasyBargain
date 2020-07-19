var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
// const multer= require('multer');

var multer = require('multer');
var path = require('path');

// const storage= multer.diskStorage({
//     destination: function(req,file,cb){
//         cb(null,'./uploads')
//     },
//     filename: function(req,res,cb){
//         cb(null, newDate().toISOString()+file.originalname)
//     }
// });
// const filefilter= (req,res,cb)=>{
//     if (file.mimetype=== '/image.jpeg' || file.mimetype=== '/image.png'){
//         cb(null,true);
//     } else{
//         cb(null,false);
//     }};
// const upload=  multer({storage: storage, limits:{
//     filesize: 1024*1024*5
// }});
var db = mongoose.connection;
var Schema = mongoose.Schema;
var dbUrl = 'mongodb://localhost:27017/uploads';
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

 
//  router.post('/uploads',(req, res, next)=>{
    // var image= req.file.filename
    // res.send("hekoo");
    // console.log(req.file.filename)
  
//     const Item2 = new productSchema({
//       image:image
  
//   });
// });

//  router.delete('/deleteproduct', (req, res,next)=>{
//     Product.findByIdAndRemove(req.body.id, function(err, response){
//        if(err) res.json({message: "Error in deleting record id " + req.params.id});
//        else res.json({message: "Product with id " + req.params.id + " removed."});
//     });
//  });

