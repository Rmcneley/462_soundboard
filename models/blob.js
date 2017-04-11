var mongoose = require('mongoose');

module.exports = mongoose.model('blobFile',{
	blob: Buffer,
	num: Number,
	username: String,
    date: Date
});