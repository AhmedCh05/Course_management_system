const mongoose = require("mongoose");

const connect = () => {
	mongoose.connect(process.env.MONGO_SERVER);
	const Database = mongoose.connection;
	Database.on("error", console.error.bind(console, "connection error: "));
	Database.once("open", () => {
		console.log("Connected To Database successfully");
	});
};

module.exports = { connect };
