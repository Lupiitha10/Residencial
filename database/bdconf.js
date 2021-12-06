"use strict";
const mysql = require('mysql');

const bdsetting = mysql.createConnection({
    host: "residencial.cecqpi4i6j6a.us-east-1.rds.amazonaws.com",
	user: "admin",
	password: "n0l0s3n0l0s3",
	database: "residencial",
});
bdsetting.connect(function (err) {
	if (err) throw err;
	console.log("Database Connected!");
});
module.exports = bdsetting;