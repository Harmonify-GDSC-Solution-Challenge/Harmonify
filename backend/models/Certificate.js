const mongoose = require("mongoose");

const certificateSchema = new mongoose.Schema({
	imageUrl: { type: String },
});

module.exports = mongoose.model("Certificate", certificateSchema);