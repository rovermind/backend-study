var http = require("http");
var router = require("./router");


var app = http.createServer(function(req, res){
	console.log(req.url);

	if (req.url === "/") {
		res.write("home");
		res.end();
	}

	var datailId = req.url.replace("/", "");
	if (detailId > 0) {
		res.write(detailId);
		res.end();
	}

	router.home(req, res);
	router.detail(req, res);

});

app.listen(3030);

//3030 -> process.env.PORT (c9.io)
console.log("Server is running at localhost:3030");