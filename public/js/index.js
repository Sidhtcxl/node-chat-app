var socket = io();

socket.on('connect',function(){
  console.log('Connected To Server');
});
socket.on('disconnect',function(){
  console.log('Disonnected To Server');
});
socket.on('newMessage',function(message){
  console.log('New Message',message);
});
