var mongoose = require('mongoose');

module.exports = mongoose.model('blobFile',{
	blob: String,
	username: String,
    date: Date
});