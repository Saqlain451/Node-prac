const http = require('http');
// creating server---->
const server = http.createServer((req,res)=>{
    res.end('Hello from the server');
})

server.listen(8000, "127.0.0.1",()=>{
    console.log('listing to the port number');
})
