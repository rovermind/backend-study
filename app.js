var http = require("http");
var router = require("./router");


var app = http.createServer(function(req, res){
	console.log(req.url);

	router.home(req, res);
	router.contact(req, res);
	router.detail(req, res);

});

app.listen(3030);

//3030 -> process.env.PORT (c9.io)
console.log("Server is running at localhost:3030");