
const { time } = require('console');
const express = require('express');
const app= express();
const http=require('http');
const expressServer = http.createServer(app);




const{Server}=require('socket.io');
const io= new Server(expressServer);




let buynsp= io.of('/buy');
buynsp.on('connection',function(socket){
    buynsp.emit('mybrodcust','hay I am from Brodcusting only buy')
})


let sellnsp= io.of('/sell');
sellnsp.on('connection',function(socket){
    sellnsp.emit('mybrodcust','hay I am from Brodcusting only sell')
})



app.get('/',function(req, res){
    res.sendFile(__dirname+'/index.html')
})





expressServer.listen(3000,function(){
    console.log('server run @ 3000 port')
})