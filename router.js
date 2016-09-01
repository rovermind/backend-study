var fs = require("fs");
var renderer = require("./renderer.js")


function home(req, res){
	if (req.url === "/home") {
		return renderer(req, res, "home", {});
	};
}

function contact(req, res){
	if (req.url === "/contact") {
		return renderer(req, res, "contact", {});
	};
}

function detail(req, res){
	var detailId = req.url.replace("/", "");
	if (detailId.length > 0) {
		res.write(detailId);
		res.end();
	}
}

module.exports.home = home;
module.exports.contact = contact;
module.exports.detail = detail;