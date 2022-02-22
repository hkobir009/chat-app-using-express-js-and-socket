
const express = require('express');
const app= express();
const http=require('http');
const expressServer = http.createServer(app);




const{Server}=require('socket.io');
const io= new Server(expressServer);



io.on('connection',function(socket){
    console.log("user connected")

    socket.on('disconnect',function(){
        console.log('user Disconnected')
    })
})




app.get('/',function(req, res){
    res.sendFile(__dirname+'/index.html')
})





expressServer.listen(3000,function(){
    console.log('server run @ 3000 port')
})