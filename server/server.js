const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const {generateMessage,generateLocationMessage} = require('./utils/message');
const publicPath = path.join(__dirname,'../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection',(socket)=>{
  console.log('New User Connected');

  socket.emit('newMessage',generateMessage('Admin','Welcome to the Chat app'));

  socket.broadcast.emit('newMessage',generateMessage('Admin','New User Joined'));

  socket.on('createMessage',(message,callback)=>{
    console.log('createMessage ',message);
    io.emit('newMessage',generateMessage(message.from,message.text));
    callback('This is from thw server.');
  });

  socket.on('createLocationMessage',(cords)=>{
    io.emit('newLocationMessage',generateLocationMessage('Admin',cords.latitude,cords.longitude));
  });

  socket.on('disconnect',()=>{
    console.log('Disonnected To client');
  });
});

server.listen(port,()=>{
  console.log(`The server is started at ${port}`);
});
