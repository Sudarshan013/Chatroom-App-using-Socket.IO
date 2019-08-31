const express= require('express')
const socket=require('socket.io')
let app=express()
var server=app.listen(3000,function(){
    console.log("I am listening daaaa")
})

//Use Static files
 
app.use(express.static('public'));

//Socket Set up
var io=socket(server)
io.on('connection',function(socket){
    console.log("Made a socket connection "+socket.id)
    socket.on('chat',function(data)
    {
        io.sockets.emit('chat',data)
    })
    socket.on('typing',function(data)
    {
        socket.broadcast.emit('typing',data)
    })
})