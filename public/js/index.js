var socket = io();

socket.on('connect',function(){
  console.log('Connected To Server');

  socket.emit('createMessage',{
    from:'siddharth',
    text: 'Hey this is Siddharth'
  });
});
socket.on('disconnect',function(){
  console.log('Disonnected To Server');
});
socket.on('newMessage',function(message){
  console.log('New Message',message);
});
