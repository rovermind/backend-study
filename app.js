var http = require("http");
//http Status(200): OK, send response "hello world"
http.createServer(function(request, response){
    response.writeHead(200,{"Content-Type":"text/plain"});
    response.write("hello world \n");
    response.end();
}).listen(3030);

//3030 -> process.env.PORT (c9.io)
console.log("Server is running at localhost:3030");