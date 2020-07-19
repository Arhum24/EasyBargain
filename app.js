




var createError = require('http-errors');
var express = require('express');

var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var  empRoutes = require("./routes/employee");
var bidderRouter=require('./routes/bidder');
var sellerRouter=require('./routes/seller');
var PersonRouter = require('./routes/person');
var ProductRouter = require('./routes/product');
const fileUpload = require('express-fileupload');
// var UploadRouter = require('./routes/uploads');
var cors = require('cors')
var app = express();
var path= require('path');
/*app.use(function(req,res,next){
  res.setHeader('Access-Control-Allow-Methods', '*')
  res.setHeader('Access-Control-Allow-Origins', '*')
  res.setHeader('Access-Control-Allow-Headers', '*')
  res.setHeader('Access-Control-Allow-Credentials', '*')

});
*/
// view engine setup
app.set('views', path.join(__dirname, 'views'));

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(fileUpload());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
///////////////////////////////
// app.use('/uploads',express.static('uploads'));
app.set('view engine', 'ejs');

app.get('/bidderlogin',(req, res)=>{
  res.render('bidder');
});
app.get('/personLogin',(req, res)=>{
  res.render('person');
});

app.get('/productLogin',(req, res)=>{
  res.render('product');
});
app.get('/sellerLogin',(req, res)=>{
  res.render('seller');

});

app.get('/upload',(req, res)=>{
  res.render('uploads');

});

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/employee', empRoutes);
app.use('/bidder',  bidderRouter);
app.use('/seller',  sellerRouter);
app.use('/person',PersonRouter);
app.use('/product',ProductRouter);
// app.use('/uploads',UploadRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error.jade');
});

/////ChatAPP Route/////

const socketio = require('socket.io');

const { addUser, removeUser, getUser, getUsersInRoom } = require('./routes/chatusers.js');

const router = require('./routes/router.js');
const http = require('http');
const server = http.createServer(app);
const io = socketio(server);

app.use(cors());
app.use(router);

io.on('connect', (socket) => {
  socket.on('join', ({ name, room }, callback) => {
    const { error, user } = addUser({ id: socket.id, name, room });

    if(error) return callback(error);

    socket.join(user.room);

    socket.emit('message', { user: 'admin', text: `${user.name}, Welcome to room ${user.room}.`});
    socket.broadcast.to(user.room).emit('message', { user: 'admin', text: `${user.name} has joined!` });

    io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });

    callback();
  });

  socket.on('sendMessage', (message, callback) => {
    const user = getUser(socket.id);

    io.to(user.room).emit('message', { user: user.name, text: message });

    callback();
  });

  socket.on('disconnect', () => {
    const user = removeUser(socket.id);

    if(user) {
      io.to(user.room).emit('message', { user: 'Admin', text: `${user.name} has left.` });
      io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room)});
    }
  })
});

server.listen(process.env.PORT || 5000, () => console.log(`Server has started.`));

module.exports = app;
