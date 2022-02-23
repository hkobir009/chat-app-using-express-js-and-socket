
const { time } = require('console');
const express = require('express');
const app= express();
const http=require('http');
const expressServer = http.createServer(app);




const{Server}=require('socket.io');
const io= new Server(expressServer);


io.on('connection',function(socket){
    io.sockets.emit('mybrodcust','hay I am from Brodcusting.......!!')
})



app.get('/',function(req, res){
    res.sendFile(__dirname+'/index.html')
})





expressServer.listen(3000,function(){
    console.log('server run @ 3000 port')
})