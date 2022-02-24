
const { time } = require('console');
const express = require('express');
const app= express();
const http=require('http');
const expressServer = http.createServer(app);




const{Server}=require('socket.io');
const io= new Server(expressServer);



app.get('/',function(req, res){
    res.sendFile(__dirname+'/index.html')
})



io.on('connection',function(socket){
    
    socket.on('chat',function(yourMassage){
        io.emit('sendChat',yourMassage)
    })
    
})

















expressServer.listen(3000,function(){
    console.log('server run @ 3000 port')
})