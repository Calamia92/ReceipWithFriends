"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var mongoose_1 = require("mongoose");
var dotenv_1 = require("dotenv");
dotenv_1.default.config();
var app = (0, express_1.default)();
var port = process.env.PORT || '3000';
mongoose_1.default.connect(process.env.DATABASE_URL, {})
    .then(function () { return console.log("MongoDB connected successfully"); })
    .catch(function (err) { return console.error("MongoDB connection error:", err); });
app.get('/', function (req, res) {
    res.send('Hello World!');
});
app.listen(port, function () {
    console.log("Server running on http://localhost:".concat(port));
});
