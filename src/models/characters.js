// import mongoose from "mongoose";
const mongoose = require("mongoose");

const characterSchema = new mongoose.Schema({
    name: String,
    phrase: String,
    home: String
});

module.exports = mongoose.model('Character', characterSchema);
