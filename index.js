
const { time } = require('console');
const express = require('express');
const app= express();
const http=require('http');
const expressServer = http.createServer(app);




const{Server}=require('socket.io');
const io= new Server(expressServer);



io.on('connection',function(socket){
    console.log("user connected")

    
    setInterval(function(){
        let d= new Date();
        let time = d.getTime();
        socket.emit('myevent',time)
    },10)

})




app.get('/',function(req, res){
    res.sendFile(__dirname+'/index.html')
})





expressServer.listen(3000,function(){
    console.log('server run @ 3000 port')
})