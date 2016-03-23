module.exports = function(config) {

	"use strict";

	const
		fs = require("fs"),
		url = require("url"),
		util = require("util"),
		express = require('express'),
		path = require("path"),
		DEFAULT_FILE = "index.html";

	let
		app = express();

	app.use(function(req, res, next) {

		let
			parsedUrl = url.parse(req.url),
			fileName = "";

		if (parsedUrl.pathname === "/") {
			fileName = DEFAULT_FILE;
		} else {
			fileName = parsedUrl.pathname.substring(1);
		}

		let fullFileName =  path.join(__dirname, config.webServer.folder, fileName);

		let p = new Promise(function(resolve, reject) {
			fs.readFile(fullFileName, "utf-8", function(err, data) {
				if (err) {
					reject(err);
					return;
				}
				resolve(data);
			});
		});

		p.then(function(result) {
			res.send(result);
		}).catch(function(result) {
			console.dir(result);
			//res.sendStatus(404);
			res.status(404).send("file not found");
			//res.send("an error occurred");
		});

		// console.log("received request");
		//
		// var person = {
		// 	name: "Uncle Bob",
		// 	occupation: "Clean Coder",
		//  	address: {
		// 		street: "123 Starship Lane",
		// 		state: "North Carolina"
		// 	}
		// };

		// console.log(util.inspect(person, {
		// 	depth: 0
		// }));

		// console.dir(person, { depth:0 });

		//console.log(util.inspect(req));

		//next();
	});

	//app.use(express.static(path.join(__dirname, config.webServer.folder)));
	app.listen(config.webServer.port, function() {
		console.log('Running a web server on port ' + config.webServer.port);
	});

	//var port = 8080;
	//var url = `http://localhost:${port}`;



};
