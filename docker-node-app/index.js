"use strict";

var t = require("./src/app");

t({
	webServer: {
		port: 3030,
		folder: "www"
	}
});
